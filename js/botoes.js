(() => {
  const fine = matchMedia('(hover: hover) and (pointer: fine)')
  document.querySelectorAll('.actions button,.contact-list a,.intro-enter').forEach(button => {
    let frame = 0
    let x = 50
    let y = 50
    let box
    button.addEventListener('pointerenter', () => { box = button.getBoundingClientRect() })
    button.addEventListener('pointermove', event => {
      if (!fine.matches || Portfolio.motion.matches || !box) return
      x = (event.clientX - box.left) / box.width * 100
      y = (event.clientY - box.top) / box.height * 100
      if (frame) return
      frame = requestAnimationFrame(() => {
        button.style.setProperty('--pointer-x', `${x.toFixed(1)}%`)
        button.style.setProperty('--pointer-y', `${y.toFixed(1)}%`)
        frame = 0
      })
    }, { passive: true })
    button.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame)
      frame = 0
      box = null
    })
  })
})()
