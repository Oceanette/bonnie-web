(() => {
  const poster = document.getElementById('workPoster')
  const nodes = [...poster.querySelectorAll('.work-bubble')]
  const seeds = [[.25,.29,16,12],[.73,.29,-13,15],[.26,.73,14,-12],[.74,.73,-15,-11]]
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value))
  let bodies = []
  let width = 0
  let height = 0
  let frame = 0
  let last = 0
  let pointer = null
  let rect = null
  const canRun = () => Portfolio.running && Portfolio.active === 'work' && width > 0
  const bounds = body => {
    const minX = body.r + 9
    const maxX = Math.max(minX, width - body.r - 9)
    const minY = body.r + 33
    const maxY = Math.max(minY, height - body.r - 29)
    if (body.x < minX || body.x > maxX) {
      body.x = clamp(body.x, minX, maxX)
      body.vx = body.x === minX ? Math.abs(body.vx) : -Math.abs(body.vx)
      body.impulse = .16
    }
    if (body.y < minY || body.y > maxY) {
      body.y = clamp(body.y, minY, maxY)
      body.vy = body.y === minY ? Math.abs(body.vy) : -Math.abs(body.vy)
      body.impulse = -.16
    }
  }
  const draw = (body, now) => {
    const wave = Portfolio.motion.matches ? 0 : Math.sin(now * .0025 + body.phase) * .018
    const squash = Portfolio.motion.matches ? 0 : body.squash + wave
    const rotation = Portfolio.motion.matches ? 0 : Math.sin(now * .0008 + body.phase) * 3
    body.node.style.transform = `translate3d(${(body.x - body.r).toFixed(2)}px,${(body.y - body.r).toFixed(2)}px,0) rotate(${rotation.toFixed(2)}deg) scale(${(1 + squash).toFixed(3)},${(1 / (1 + squash)).toFixed(3)})`
  }
  const measure = () => {
    if (Portfolio.active !== 'work') return
    const nextWidth = poster.clientWidth
    const nextHeight = poster.clientHeight
    if (!nextWidth || !nextHeight) return
    const oldWidth = width
    const oldHeight = height
    width = nextWidth
    height = nextHeight
    bodies = nodes.map((node, index) => {
      const old = bodies[index]
      const [x, y, vx, vy] = seeds[index]
      node.style.left = '0'
      node.style.top = '0'
      const body = {
        node,
        x: old && oldWidth ? old.x / oldWidth * width : width * x,
        y: old && oldHeight ? old.y / oldHeight * height : height * y,
        vx: old?.vx ?? vx,
        vy: old?.vy ?? vy,
        r: node.offsetWidth / 2,
        squash: 0,
        impulse: 0,
        spring: 0,
        phase: index * 1.7
      }
      bounds(body)
      draw(body, 0)
      return body
    })
    rect = null
    pointer = null
  }
  const collisions = () => {
    for (let i = 0; i < bodies.length; i++) {
      for (let j = i + 1; j < bodies.length; j++) {
        const a = bodies[i]
        const b = bodies[j]
        const dx = b.x - a.x
        const dy = b.y - a.y
        const distance = Math.hypot(dx, dy) || .001
        const minimum = (a.r + b.r) * .94
        if (distance >= minimum) continue
        const nx = distance === .001 ? 1 : dx / distance
        const ny = dy / distance
        const overlap = (minimum - distance) * .5
        a.x -= nx * overlap
        a.y -= ny * overlap
        b.x += nx * overlap
        b.y += ny * overlap
        const speed = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny
        if (speed < 0) {
          const impulse = -speed * .93
          a.vx -= impulse * nx
          a.vy -= impulse * ny
          b.vx += impulse * nx
          b.vy += impulse * ny
          a.impulse = clamp(-speed / 240, .06, .22)
          b.impulse = -a.impulse
        }
      }
    }
  }
  const animate = now => {
    frame = 0
    if (!canRun()) return
    const dt = Math.min((now - last) / 1000, .033)
    last = now
    for (const body of bodies) {
      if (pointer) {
        const dx = body.x - pointer.x
        const dy = body.y - pointer.y
        const distance = Math.hypot(dx, dy)
        if (distance > .5 && distance < body.r + 44) {
          const force = (1 - distance / (body.r + 44)) * 34 * dt
          body.vx += dx / distance * force
          body.vy += dy / distance * force
        }
      }
      const speed = Math.hypot(body.vx, body.vy) || 1
      const desired = clamp(speed, 16, 48)
      const factor = 1 + (desired / speed - 1) * Math.min(1, dt * 2)
      body.vx *= factor
      body.vy *= factor
      body.x += body.vx * dt
      body.y += body.vy * dt
      bounds(body)
    }
    collisions()
    for (const body of bodies) {
      bounds(body)
      if (body.impulse) {
        body.spring += body.impulse * 13
        body.impulse = 0
      }
      body.spring += (-body.squash * 105 - body.spring * 8) * dt
      body.squash = clamp(body.squash + body.spring * dt, -.2, .24)
      draw(body, now)
    }
    frame = requestAnimationFrame(animate)
  }
  const sync = () => {
    cancelAnimationFrame(frame)
    frame = 0
    if (Portfolio.active === 'work') measure()
    poster.classList.toggle('is-running', canRun())
    if (canRun()) {
      last = performance.now()
      frame = requestAnimationFrame(animate)
    }
  }
  nodes.forEach((node, index) => {
    node.addEventListener('click', () => {
      if (!canRun()) return
      const body = bodies[index]
      if (!body) return
      body.vx += index % 2 ? -12 : 12
      body.vy -= 18
      body.impulse = .25
    })
  })
  poster.addEventListener('pointerenter', () => { rect = poster.getBoundingClientRect() })
  poster.addEventListener('pointermove', event => {
    if (!canRun() || event.pointerType !== 'mouse' || !rect) return
    pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top }
  }, { passive: true })
  poster.addEventListener('pointerleave', () => { pointer = null; rect = null })
  new ResizeObserver(sync).observe(poster)
  document.addEventListener('portfolio:screen', sync)
  document.addEventListener('portfolio:ready', sync)
  document.addEventListener('portfolio:motion', sync)
  sync()
})()
