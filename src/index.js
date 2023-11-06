window.onload = () => {
  console.log('page is fully loaded')
  render()
}

function render () {
  fetch('../src/mocks/data.json').then((response) => {
    return response.json()
  }).then((data) => {
    renderData(data)
    renderServices(data)
    renderGallery(data)
    renderEvents(data)
  }).catch((err) => {
    console.log(err)
  })
}

function renderData (data) {
  const logoHeaderElement = document.querySelector('.header-logo')
  const nameHeaderElement = document.querySelector('.header-page-name')

  const subtitleHeroElement = document.querySelector('.hero-subtitle')
  const titleHeroElement = document.querySelector('.hero-title')
  const paragraphHeroElement = document.querySelector('.hero-paragraph')
  const imageHeroElement = document.querySelector('.img-hero')

  const subtitleServicesElement = document.querySelector('.services-subtitle')
  const titleServicesElement = document.querySelector('.services-title')
  const paragraphServicesElement = document.querySelector('.services-paragraph')

  const galleryTitleElement = document.querySelector('.gallery-title')

  const eventsSubtitleElement = document.querySelector('.events-subtitle')
  const eventsTitleElement = document.querySelector('.events-title')
  const eventsParagraphElement = document.querySelector('.events-paragraph')

  const footerImageElement = document.querySelector('.img-footer')
  const footerTitleElement = document.querySelector('.footer-title')
  const footerParagraphElement = document.querySelector('.footer-paragraph')
  const footerHomeElement = document.querySelector('.home-home')
  const footerHomeProductsElement = document.querySelector('.home-product')
  const footerHomeAboutUsElement = document.querySelector('.home-about-us')
  const footerContactElement = document.querySelector('.contact-contact')
  const footerContactEmail = document.querySelectorAll('.contact-email')

  logoHeaderElement.src = data.logoheader
  nameHeaderElement.innerHTML = data.nameheader

  subtitleHeroElement.innerHTML = data.subtitleHero
  titleHeroElement.innerHTML = data.titleHero
  paragraphHeroElement.innerHTML = data.paragraphHero
  imageHeroElement.src = data.imageHero

  subtitleServicesElement.innerHTML = data.subtitleServices
  titleServicesElement.innerHTML = data.titleServices
  paragraphServicesElement.innerHTML = data.paragraphServices

  galleryTitleElement.innerHTML = data.galleryTitle

  eventsSubtitleElement.innerHTML = data.subtitleEvents
  eventsTitleElement.innerHTML = data.titleEvents
  eventsParagraphElement.innerHTML = data.paragraphEvents

  footerImageElement.src = data.imageFooter
  footerTitleElement.innerHTML = data.titleFooter
  footerParagraphElement.innerHTML = data.paragraphFooter
  footerHomeElement.innerHTML = data.titleHome
  footerHomeProductsElement.innerHTML = data.paragraphHomeProducts
  footerHomeAboutUsElement.innerHTML = data.paragraphHomeAboutUs
  footerContactElement.innerHTML = data.titleContact
  footerContactEmail[0].innerHTML = data.paragraphContactAchaba
  footerContactEmail[1].innerHTML = data.paragraphContactSuarez
}


function renderServices (data) {
  console.log('Rendering services with data:', data.service)
  const serviceArray = data.service
  const servicesContainer = document.querySelector('.services-cards')

  serviceArray.forEach((service) => {
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

function renderGallery (data) {
  const galleryArray = data.gallery
  const galleryContainer = document.querySelector('.gallery-images')

  galleryArray.forEach((gallery) => {
    const card = document.createElement('div')
    card.classList.add('item-card-gallery')

    const image = document.createElement('img')
    image.src = gallery.image
    card.appendChild(image)

    galleryContainer.appendChild(card)
  })
}

function renderEvents (data) {
  const eventsArray = data.events
  const eventsContainer = document.querySelector('.events-cards')

  eventsArray.forEach((events) => {
    const card = document.createElement('div')
    card.classList.add('item-card-event')

    const image = document.createElement('img')
    image.src = events.image
    card.appendChild(image)

    const title = document.createElement('h3')
    title.innerHTML = events.title
    card.appendChild(title)

    eventsContainer.appendChild(card)
  })
}