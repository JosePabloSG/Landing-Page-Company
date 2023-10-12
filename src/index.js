window.onload = () => {
  console.log('page is fully loaded')
  render()
}

function render () {
  fetch('../src/mocks/data.json').then((response) => {
    return response.json()
  }).then((data) => {
    const headerData = data.header
    const heroData = data.hero
    const servicesData = data.services
    const galleryData = data.gallery
    const eventsData = data.events

    renderEvents(eventsData)
    renderGallery(galleryData)
    renderServices(servicesData)
    renderHero(heroData)
    renderHeader(headerData)
  }).catch((err) => {
    console.log(err)
  })
}

function renderHeader (headerData) {
  const headerLogo = document.querySelector('.header-logo')
  const headerTemplate = document.querySelector('.header-page-name')

  headerLogo.setAttribute('src', headerData.logo)
  headerTemplate.innerHTML = headerData.name
}

function renderHero (heroData) {
  const heroSubtitle = document.querySelector('.hero-subtitle')
  const heroTitle = document.querySelector('.hero-title')
  const heroParagraph = document.querySelector('.hero-paragraph')
  const heroImage = document.querySelector('.img-hero')

  heroSubtitle.innerHTML = heroData.subtitle
  heroTitle.innerHTML = heroData.title
  heroParagraph.innerHTML = heroData.paragraph
  heroImage.setAttribute('src', heroData.image)
}

function renderServices (servicesData) {
  const servicesSubtitle = document.querySelector('.services-subtitle')
  const servicesTitle = document.querySelector('.services-title')
  const servicesParagraph = document.querySelector('.services-paragraph')

  servicesSubtitle.innerHTML = servicesData.subtitle
  servicesTitle.innerHTML = servicesData.title
  servicesParagraph.innerHTML = servicesData.paragraph

  const servicesArray = servicesData.service
  const servicesContainer = document.querySelector('.services-cards')

  servicesArray.forEach((service) => {
    const card = document.createElement('div')
    card.classList.add('item-card-service')

    const image = document.createElement('img')
    image.src = service.image
    card.appendChild(image)

    const title = document.createElement('h3')
    title.innerHTML = service.title
    card.appendChild(title)

    const paragraph = document.createElement('p')
    paragraph.innerHTML = service.paragraph
    card.appendChild(paragraph)

    servicesContainer.appendChild(card)
  })
}

function renderGallery (galleryData) {
  const galleryTitle = document.querySelector('.gallery-title')
  galleryTitle.innerHTML = galleryData.title

  const galleryAray = galleryData.picture
  const galleryContainer = document.querySelector('.gallery-images')

  galleryAray.forEach((picture) => {
    const card = document.createElement('div')
    card.classList.add('item-card-gallery')

    const image = document.createElement('img')
    image.src = picture.image
    card.appendChild(image)

    galleryContainer.appendChild(card)
  })
}

function renderEvents (eventsData) {
  const eventsSubtitle = document.querySelector('.events-subtitle')
  const eventsTitle = document.querySelector('.events-title')
  const eventsParagraph = document.querySelector('.events-paragraph')

  eventsSubtitle.innerHTML = eventsData.subtitle
  eventsTitle.innerHTML = eventsData.title
  eventsParagraph.innerHTML = eventsData.paragraph

  const eventsArray = eventsData.event
  const eventsContainer = document.querySelector('.events-cards')

  eventsArray.forEach((event) => {
    const card = document.createElement('div')
    card.classList.add('item-card-event')

    const image = document.createElement('img')
    image.src = event.image
    card.appendChild(image)

    const title = document.createElement('h3')
    title.innerHTML = event.title
    card.appendChild(title)
    eventsContainer.appendChild(card)
  })
}
