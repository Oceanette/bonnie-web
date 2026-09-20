(() => {
  const content = document.querySelector('.content')
  const landscape = content.querySelector('.landscape')
  const intro = document.getElementById('intro')
  intro.append(landscape.cloneNode(true))
  const sceneObserver = new ResizeObserver(entries => {
    entries.forEach(({target, contentRect}) => {
      target.style.setProperty('--terrain-scale', Math.max(.1, Math.min(1.2, contentRect.height / 220)).toFixed(4))
    })
  })
  document.querySelectorAll('.landscape').forEach(scene => sceneObserver.observe(scene))
  document.addEventListener('portfolio:ready', () => {
    const scene = intro.querySelector('.landscape')
    if (scene) sceneObserver.unobserve(scene)
  }, { once: true })
  const fine = matchMedia('(hover: hover) and (pointer: fine)')
  let target = 0
  let current = 0
  let frame = 0
  let box
  const draw = () => {
    frame = 0
    if (!Portfolio.running || !fine.matches) {
      current = 0
      target = 0
      landscape.style.removeProperty('--wind-x')
      landscape.style.removeProperty('--wind-r')
      return
    }
    current += (target - current) * .075
    landscape.style.setProperty('--wind-x', `${(current * 6).toFixed(2)}px`)
    landscape.style.setProperty('--wind-r', `${(current * 1.2).toFixed(2)}deg`)
    if (Math.abs(target - current) > .005) frame = requestAnimationFrame(draw)
  }
  const start = () => { if (!frame) frame = requestAnimationFrame(draw) }
  content.addEventListener('pointerenter', () => { box = content.getBoundingClientRect() })
  content.addEventListener('pointermove', event => {
    if (!Portfolio.running || !fine.matches || !box) return
    target = Math.max(-1, Math.min(1, (event.clientX - box.left) / box.width * 2 - 1))
    start()
  }, { passive: true })
  content.addEventListener('pointerleave', () => { target = 0; box = null; start() })
  window.addEventListener('resize', () => { box = null; target = 0; start() }, { passive: true })
  document.addEventListener('portfolio:motion', start)
})()
