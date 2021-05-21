function handleWindowLoad () {
   const newBurger =  document.querySelector('.header-burger') ;
   newBurger.addEventListener('click', burgermenu );

}
function burgermenu() {
    document.querySelector('.header-burger').classList.toggle('active')
    document.querySelector('.navigation').classList.toggle('active')
    document.querySelector('.info-bar').classList.toggle('active')
    document.querySelector('#uzlang').innerText = 'Uzbek'
    document.querySelector('#rulang').innerText = 'Russian'
    document.querySelector('#enlang').innerText = 'English'
}

function createDynamicElements() {
    const secondaryContainer = document.createElement('section')
    secondaryContainer.classList.add('secondary-container')

    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card-info')
    secondaryContainer.append(cardInfo)

    const imgCard = document.createElement ('div')
    imgCard.classList.add('img-card')
    cardInfo.append(imgCard)

    const imgElement = document.createElement('img')
    imgElement.src = " "
    tagElement.append(imgElement)

    const tagElement = document.createElement('a')
    bigCard.append(tagElement)





}

window.addEventListener('load' , handleWindowLoad ); 