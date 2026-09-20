(() => {
  const storageKey = 'bonnie-language'
  const texts = {
    pt: {
      locale: 'pt-BR',
      meta: 'O arquivo pessoal de Bonnie: programação, jogos, interfaces e experimentos desde os primeiros dias da web.',
      skip: 'Pular para o conteúdo',
      introLabel: 'Introdução',
      introKicker: 'PÁGINA PESSOAL / ARQUIVO WEB DOS ANOS 2000',
      introTitle: '<span>sobre</span><span>mim</span>',
      introLoader: 'UM PEQUENO CANTO DA INTERNET',
      enter: 'ENTRAR <span>↗</span>',
      footerA: 'DESDE QUANDO A INTERNET ERA ESTRANHA',
      footerB: 'MELHOR VISTO COM CURIOSIDADE',
      brand: 'MEU CANTO NA INTERNET',
      navLabel: 'Seções do perfil',
      nav: ['um pouco sobre mim', 'como tudo começou', 'o que ando criando', 'jogos e obsessões', 'vamos conversar'],
      statusMain: '<i></i> POR AQUI :)',
      statusSub: 'curiosa / criando / aprendendo',
      info: '+ INFORMAÇÕES',
      homeTitle: 'SOBRE BONNIE',
      storyTitle: 'MINHA HISTÓRIA',
      workTitle: 'COISAS QUE FAÇO',
      likesTitle: 'COISAS QUE GOSTO',
      linksTitle: 'LINKS & CONTATO',
      homeH: 'Gosto de transformar curiosidade em projeto e ver até onde uma ideia consegue chegar.',
      homeP: 'Eu sou a Bonnie, mas talvez você já tenha me encontrado pela internet como Futterman ou Obunto. Passo boa parte do meu tempo programando, jogando e criando ferramentas experimentais. Quase tudo começa com um simples “e se...?” e acaba virando algo que eu precisava tirar da cabeça.',
      readStory: 'LER HISTÓRIA <span>→</span>',
      viewWork: 'VER PROJETOS <span>→</span>',
      photoAlt: 'Foto de Bonnie ao ar livre',
      portrait: 'AUTORRETRATO / ARQUIVO 01',
      storyH: 'Minha curiosidade por programação começou cedo, no meio daquela internet caótica e cheia de cantos estranhos.',
      storyP1: 'Eu tinha por volta de 15 anos quando comecei a explorar fóruns, 4Chan, Reddit, mods, scripts e todo tipo de ferramenta obscura. Aquilo virou meu laboratório: um lugar para desmontar coisas, entender como funcionavam e tentar montar algo meu.',
      storyP2: 'Foi assim que percebi que programar, para mim, nunca seria apenas escrever código. O divertido é descobrir a lógica por trás de um sistema e reconstruí-lo com outra personalidade.',
      years: 'ANOS',
      storyCard: 'quando programação, comunidades e modding começaram a fazer parte da minha vida',
      workH: 'Se uma ideia parece divertida, provavelmente vou tentar descobrir como fazê-la funcionar.',
      workP: 'Já trabalhei em traduções de jogos como STAR WARS Empire at War, IXION e Don\'t Starve Together. Também gosto de criar interfaces, experiências para a web, ferramentas e sistemas experimentais. Alguns projetos resolvem um problema; outros existem porque eu queria muito ver aquela ideia funcionando.',
      shake: 'Agitar bolha',
      likesH: 'Jogos sempre foram uma das minhas formas favoritas de explorar ideias e sistemas.',
      likesP: 'League of Legends, Project Zomboid e Portal estão entre os mundos aos quais sempre acabo voltando. Gosto do caos, das possibilidades e dos pequenos detalhes que fazem cada jogo funcionar.',
      linksH: 'Se quiser acompanhar o que faço ou simplesmente conversar, estes são os lugares em que você me encontra.',
      linksP: 'No GitHub ficam meus projetos; por e-mail você fala comigo diretamente. Também apareço na Steam e no Discord quando não estou ocupada criando alguma coisa nova.',
      languageAria: 'Trocar idioma'
    },
    en: {
      locale: 'en-US',
      meta: 'Bonnie\'s personal archive: programming, games, interfaces and experiments from the weird corners of the web.',
      skip: 'Skip to content',
      introLabel: 'Introduction',
      introKicker: 'PERSONAL PAGE / 2000s WEB ARCHIVE',
      introTitle: '<span>about</span><span>me</span>',
      introLoader: 'A LITTLE CORNER OF THE INTERNET',
      enter: 'ENTER <span>↗</span>',
      footerA: 'SINCE THE INTERNET WAS WEIRD',
      footerB: 'BEST VIEWED WITH CURIOSITY',
      brand: 'MY CORNER OF THE INTERNET',
      navLabel: 'Profile sections',
      nav: ['a little about me', 'how it all started', 'what I have been making', 'games and obsessions', 'let\'s talk'],
      statusMain: '<i></i> AROUND HERE :)',
      statusSub: 'curious / building / learning',
      info: '+ INFORMATION',
      homeTitle: 'ABOUT BONNIE',
      storyTitle: 'MY STORY',
      workTitle: 'THINGS I MAKE',
      likesTitle: 'THINGS I LIKE',
      linksTitle: 'LINKS & CONTACT',
      homeH: 'I like turning curiosity into projects just to see how far an idea can go.',
      homeP: 'I\'m Bonnie, though you may have come across me online as Futterman or Obunto. I spend a lot of my time programming, playing games and building experimental tools. Almost everything starts with a simple “what if...?” and somehow turns into something I need to get out of my head and into the world.',
      readStory: 'READ STORY <span>→</span>',
      viewWork: 'VIEW WORK <span>→</span>',
      photoAlt: 'Photo of Bonnie outdoors',
      portrait: 'SELF PORTRAIT / ARCHIVE 01',
      storyH: 'My curiosity about programming started early, in the middle of a chaotic internet full of strange little corners.',
      storyP1: 'I was around 15 when I started exploring forums, 4Chan, Reddit, mods, scripts and all kinds of obscure tools. It became my informal laboratory: a place to take things apart, understand how they worked and try to build something of my own.',
      storyP2: 'That is when I realized programming would never be just about writing code for me. The fun part is discovering the logic behind a system and rebuilding it with a different personality.',
      years: 'YEARS',
      storyCard: 'when programming, communities and modding started becoming part of my life',
      workH: 'If an idea sounds fun, I will probably try to figure out how to make it work.',
      workP: 'I have worked on translations for games such as STAR WARS Empire at War, IXION and Don\'t Starve Together. I also enjoy building interfaces, web experiences, tools and experimental systems. Some projects solve a problem; others exist simply because I really wanted to see the idea working.',
      shake: 'Shake bubble',
      likesH: 'Games have always been one of my favorite ways to explore ideas and systems.',
      likesP: 'League of Legends, Project Zomboid and Portal are some of the worlds I keep coming back to. I love the chaos, the possibilities and the small details that make each game work.',
      linksH: 'If you want to follow what I make or just say hello, these are the places where you can find me.',
      linksP: 'My projects live on GitHub, and email is the most direct way to reach me. You can also find me on Steam and Discord whenever I am not busy making something new.',
      languageAria: 'Change language'
    }
  }

  const readStored = () => {
    try {
      const value = localStorage.getItem(storageKey)
      return value === 'pt' || value === 'en' ? value : null
    } catch {
      return null
    }
  }

  const detect = () => {
    const stored = readStored()
    if (stored) return stored
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language || 'en']
    const selected = languages.find(value => /^pt(?:-|$)|^en(?:-|$)/i.test(value)) || languages[0] || 'en'
    return /^pt(?:-|$)/i.test(selected) ? 'pt' : 'en'
  }

  let current = detect()

  const one = selector => document.querySelector(selector)
  const all = selector => [...document.querySelectorAll(selector)]
  const text = (selector, value) => {
    const node = one(selector)
    if (node) node.textContent = value
  }
  const html = (selector, value) => {
    const node = one(selector)
    if (node) node.innerHTML = value
  }

  const apply = language => {
    current = language === 'pt' ? 'pt' : 'en'
    const t = texts[current]
    document.documentElement.lang = t.locale
    document.title = 'Bonnie // About Me'
    const meta = one('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.meta)
    text('.skip-link', t.skip)
    const intro = one('#intro')
    if (intro) intro.setAttribute('aria-label', t.introLabel)
    text('.intro-kicker', t.introKicker)
    html('.intro-copy h1', t.introTitle)
    text('.intro-loader > span', t.introLoader)
    html('#enterPortfolio', t.enter)
    const introFooter = all('.intro-footer span')
    if (introFooter[0]) introFooter[0].textContent = t.footerA
    if (introFooter[1]) introFooter[1].textContent = t.footerB
    text('.brand small', t.brand)
    const nav = one('.nav')
    if (nav) nav.setAttribute('aria-label', t.navLabel)
    all('.nav-item small').forEach((node, index) => {
      if (t.nav[index]) node.textContent = t.nav[index]
    })
    html('.status b', t.statusMain)
    text('.status small', t.statusSub)
    text('.content-head > div:first-child > span', t.info)
    text('#screen-home .copy h3', t.homeH)
    text('#screen-home .copy p', t.homeP)
    html('#screen-home [data-jump="story"]', t.readStory)
    html('#screen-home [data-jump="work"]', t.viewWork)
    const photo = one('.photo-card img')
    if (photo) photo.setAttribute('alt', t.photoAlt)
    text('.photo-card figcaption > span', t.portrait)
    text('#screen-story .copy h3', t.storyH)
    const storyParagraphs = all('#screen-story .copy p')
    if (storyParagraphs[0]) storyParagraphs[0].textContent = t.storyP1
    if (storyParagraphs[1]) storyParagraphs[1].textContent = t.storyP2
    text('.story-poster > b', t.years)
    text('.story-poster > p', t.storyCard)
    text('#screen-work .copy h3', t.workH)
    text('#screen-work .copy p', t.workP)
    all('.work-bubble').forEach(node => node.setAttribute('aria-label', `${t.shake} ${node.textContent.trim()}`))
    text('#screen-likes .copy h3', t.likesH)
    text('#screen-likes .copy p', t.likesP)
    text('#screen-links .copy h3', t.linksH)
    text('#screen-links .copy p', t.linksP)
    all('#languageToggle, #languageToggleIntro').forEach(button => {
      button.dataset.language = current
      button.setAttribute('aria-label', t.languageAria)
      button.querySelector('span')?.classList.toggle('active', current === 'pt')
      button.querySelector('strong')?.classList.toggle('active', current === 'en')
    })
    try {
      localStorage.setItem(storageKey, current)
    } catch {
    }
    document.dispatchEvent(new CustomEvent('portfolio:language', { detail: { language: current, locale: t.locale } }))
  }

  const title = name => {
    const t = texts[current]
    return {
      home: t.homeTitle,
      story: t.storyTitle,
      work: t.workTitle,
      likes: t.likesTitle,
      links: t.linksTitle
    }[name] || t.homeTitle
  }

  const toggle = () => apply(current === 'pt' ? 'en' : 'pt')

  window.SiteLanguage = {
    apply,
    toggle,
    title,
    locale: () => texts[current].locale,
    get current() { return current }
  }

  all('#languageToggle, #languageToggleIntro').forEach(button => button.addEventListener('click', toggle))
  apply(current)
})()
