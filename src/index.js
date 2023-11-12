window.onload = () => {
  console.log('page is fully loaded')
  render()
}

function render () {
  fetch('http://localhost:3000/api/companies').then((response) => {
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
  console.log('Rendering data:', data[0])
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

  logoHeaderElement.src = data[0].logoheader
  nameHeaderElement.innerHTML = data[0].nameheader

  subtitleHeroElement.innerHTML = data[0].subtitleHero
  titleHeroElement.innerHTML = data[0].titleHero
  paragraphHeroElement.innerHTML = data[0].paragraphHero
  imageHeroElement.src = data[0].imageHero

  subtitleServicesElement.innerHTML = data[0].subtitleServices
  titleServicesElement.innerHTML = data[0].titleServices
  paragraphServicesElement.innerHTML = data[0].paragraphServices

  galleryTitleElement.innerHTML = data[0].galleryTitle

  eventsSubtitleElement.innerHTML = data[0].subtitleEvents
  eventsTitleElement.innerHTML = data[0].titleEvents
  eventsParagraphElement.innerHTML = data[0].paragraphEvents

  footerImageElement.src = data[0].imageFooter
  footerTitleElement.innerHTML = data[0].titleFooter
  footerParagraphElement.innerHTML = data[0].paragraphFooter
  footerHomeElement.innerHTML = data[0].titleHome
  footerHomeProductsElement.innerHTML = data[0].paragraphHomeProducts
  footerHomeAboutUsElement.innerHTML = data[0].paragraphHomeAboutUs
  footerContactElement.innerHTML = data[0].titleContact
  footerContactEmail[0].innerHTML = data[0].paragraphContactAchaba
  footerContactEmail[1].innerHTML = data[0].paragraphContactSuarez
}


function renderServices (data) {
  console.log('Rendering services with data:', data[0].service)
  const serviceArray = data[0].service
  const servicesContainer = document.querySelector('.services-cards')

  if (serviceArray) {
    serviceArray.forEach((service) => {
      const card = document.createElement('div')
      card.classList.add('item-card-service')

      const image = document.createElement('img')
      image.src = service.url
      card.appendChild(image)

      const title = document.createElement('h3')
      title.innerHTML = service.title
      card.appendChild(title)

      const paragraph = document.createElement('p')
      paragraph.innerHTML = service.paragraph
      card.appendChild(paragraph)

      servicesContainer.appendChild(card)
    })
  } else {
    console.log('No services found in data')
  }
}

function renderGallery (data) {
  console.log('Rendering gallery with data:', data[0].galleries)
  const galleryArray = data[0].galleries
  const galleryContainer = document.querySelector('.gallery-images')

  if(galleryArray){
    galleryArray.forEach((gallery) => {
      const card = document.createElement('div')
      card.classList.add('item-card-gallery')
  
      const image = document.createElement('img')
      image.src = gallery.url
      card.appendChild(image)
  
      galleryContainer.appendChild(card)
    })
  } else {
    console.log('No gallery found in data')
  }
}

function renderEvents (data) {
  console.log('Rendering events with data:', data[0].event)
  const eventsArray = data[0].event
  const eventsContainer = document.querySelector('.events-cards')

  if(eventsArray){
    eventsArray.forEach((events) => {
      const card = document.createElement('div')
      card.classList.add('item-card-event')
  
      const image = document.createElement('img')
      image.src = events.url
      card.appendChild(image)
  
      const title = document.createElement('h3')
      title.innerHTML = events.title
      card.appendChild(title)
  
      eventsContainer.appendChild(card)
    })
  } else {
    console.log('No events found in data')
  }
}