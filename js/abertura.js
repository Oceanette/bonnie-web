(() => {
  const intro = document.getElementById('intro')
  const app = document.getElementById('app')
  const button = document.getElementById('enterPortfolio')
  let opened = false
  let timer = 0
  const finish = () => {
    intro.hidden = true
    intro.replaceChildren()
  }
  const reveal = () => {
    if (opened) return
    opened = true
    clearTimeout(timer)
    const focused = intro.contains(document.activeElement)
    app.inert = false
    app.removeAttribute('aria-hidden')
    app.classList.add('visible')
    intro.classList.add('leaving')
    intro.inert = true
    if (focused) document.querySelector('.nav-item.active').focus({ preventScroll: true })
    document.dispatchEvent(new Event('portfolio:ready'))
    if (Portfolio.motion.matches) finish()
    else {
      intro.addEventListener('transitionend', event => {
        if (event.target === intro && event.propertyName === 'opacity') finish()
      }, { once: true })
      setTimeout(finish, 800)
    }
  }
  app.inert = true
  app.setAttribute('aria-hidden', 'true')
  button.addEventListener('click', reveal)
  document.addEventListener('keydown', event => { if (event.key === 'Escape') reveal() })
  const photo = document.querySelector('.photo-card img')
  if (photo.decode) photo.decode().catch(() => {})
  Portfolio.motion.addEventListener('change', () => { if (Portfolio.motion.matches) reveal() })
  timer = setTimeout(reveal, Portfolio.motion.matches ? 0 : 1550)
})()
