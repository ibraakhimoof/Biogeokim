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

    const selectBtn = document.createElement('button')
    selectBtn.classList.add('selected-btn')
    tagElement.append(selectBtn)

    const infoDivElement = document.createElement('div')
    infoDivElement.classList.add('info-element')
    cardInfo.append(infoDivElement)

    const mainInfoElement = document.createElement('h4')
    mainInfoElement.innerText('')
    infoDivElement.append(mainInfoElement)

    const mainPelements = document.createElement('p')
    mainPelements.innerText('')
    infoDivElement.append(mainPelements)

    const brElement = document.createElement('br')
    infoDivElement.append(brElement)




}

window.addEventListener('load' , handleWindowLoad ); 