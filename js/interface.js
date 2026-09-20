(() => {
  const root = document.documentElement
  const app = document.getElementById('app')
  const panels = [...document.querySelectorAll('.screen')]
  const navigation = [...document.querySelectorAll('.nav-item')]
  const screens = document.getElementById('conteudo')
  const titles = {
    home: ['ABOUT BONNIE', '01 / 05'],
    story: ['MY STORY', '02 / 05'],
    work: ['THINGS I MAKE', '03 / 05'],
    likes: ['THINGS I LIKE', '04 / 05'],
    links: ['LINKS & CONTACT', '05 / 05']
  }
  const motion = matchMedia('(prefers-reduced-motion: reduce)')
  let active = ''
  const emit = name => document.dispatchEvent(new CustomEvent(name, { detail: { screen: active } }))
  const select = (name, update = true, focus = false) => {
    if (!titles[name] || active === name) return
    const focusedPanel = document.activeElement?.closest('.screen')
    active = name
    panels.forEach(panel => {
      const selected = panel.dataset.screen === name
      panel.hidden = !selected
      panel.inert = !selected
      panel.classList.toggle('active', selected)
    })
    navigation.forEach(button => {
      const selected = button.dataset.screen === name
      button.classList.toggle('active', selected)
      if (selected) button.setAttribute('aria-current', 'page')
      else button.removeAttribute('aria-current')
      button.setAttribute('aria-controls', `screen-${button.dataset.screen}`)
    })
    document.getElementById('screenTitle').textContent = titles[name][0]
    document.getElementById('footerScreen').textContent = titles[name][1]
    screens.scrollTop = 0
    if (update && location.hash !== `#${name}`) {
      try { history.replaceState(null, '', `#${name}`) } catch { }
    }
    if (focus || focusedPanel) screens.focus({ preventScroll: true })
    emit('portfolio:screen')
  }
  window.Portfolio = {
    motion,
    select,
    get active() { return active },
    get running() { return app.classList.contains('visible') && !document.hidden && !motion.matches }
  }
  document.addEventListener('click', event => {
    const button = event.target.closest('button[data-screen],button[data-jump]')
    if (button) select(button.dataset.jump || button.dataset.screen, true, Boolean(button.dataset.jump))
  })
  document.querySelector('.nav').addEventListener('keydown', event => {
    const index = navigation.indexOf(document.activeElement)
    if (index < 0) return
    let next = index
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % navigation.length
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + navigation.length) % navigation.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = navigation.length - 1
    else return
    event.preventDefault()
    navigation[next].focus({ preventScroll: true })
    select(navigation[next].dataset.screen)
  })
  window.addEventListener('hashchange', () => {
    const name = location.hash.slice(1)
    if (titles[name]) select(name, false)
  })
  document.addEventListener('visibilitychange', () => {
    root.classList.toggle('is-paused', document.hidden)
    emit('portfolio:motion')
  })
  motion.addEventListener('change', () => emit('portfolio:motion'))
  document.getElementById('browserDate').textContent = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' }).format(new Date())
  select(titles[location.hash.slice(1)] ? location.hash.slice(1) : 'home', false)
})()
