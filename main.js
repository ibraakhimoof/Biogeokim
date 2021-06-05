const IMAGE_URL = "http://192.144.37.95/images/";
function handleWindowLoad () {
   const newBurger =  document.querySelector('.header-burger') ;
   newBurger.addEventListener('click', burgermenu );
   getFetchApi()
}
function burgermenu() {
    document.querySelector('.header-burger').classList.toggle('active')
    document.querySelector('.navigation').classList.toggle('active')
    document.querySelector('.info-bar').classList.toggle('active')
    document.querySelector('#uzlang').innerText = 'Uzbek'
    document.querySelector('#rulang').innerText = 'Russian'
    document.querySelector('#enlang').innerText = 'English'
}
async function getFetchApi(){
    const url = 'http://192.144.37.95:8080/api/articles?langId=1';
    try{
        const response = await fetch(url);
        const loadElements = await response.json();
        
        console.log(loadElements)   
        
        
        
        for (let index = 0; index < 3; index++) {
            createDynamicElements(loadElements[index])
            secondInfobloks(loadElements[index])
        }
    }
    catch (e){
        console.log(e)
    }
}
//timestamp conversion
// function convertTimestamp(timestamp) {
//     var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
//         yyyy = d.getFullYear(),
//         mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
//         dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
//         hh = d.getHours(),
//         h = hh,
//         min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
//         ampm = 'AM',
//         time;

//     if (hh > 12) {
//         h = hh - 12;
//         ampm = 'PM';
//     } else if (hh === 12) {
//         h = 12;
//         ampm = 'PM';
//     } else if (hh == 0) {
//         h = 12;
//     }

//     // ie: 2014-03-24, 3:00 PM
//     time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
//     return time;
// }

function createDynamicElements(data) {
    const secondaryContainer = document.getElementById('secondryContainer')

    const cardInfo = document.createElement('a')
    
    cardInfo.classList.add('card')
    cardInfo.setAttribute("href" , " ")
    secondaryContainer.append(cardInfo)

    const imgCard = document.createElement ('div')
    imgCard.classList.add('card-image-container')
    cardInfo.append(imgCard)


    const imgElement = document.createElement('img')
    imgElement.src = IMAGE_URL + data.image;
    imgElement.classList.add('card-image-src')
    imgCard.append(imgElement)

    const selectBtn = document.createElement('button')
    selectBtn.classList.add('selected-btn')
    selectBtn.innerText = ('Category')
    imgCard.append(selectBtn)

    const infoDivElement = document.createElement('div')
    infoDivElement.classList.add('info-element')
    cardInfo.append(infoDivElement)

    const mainInfoElement = document.createElement('h4')
    mainInfoElement.innerText = data.title
    infoDivElement.append(mainInfoElement)

    const mainPelements = document.createElement('p')
    mainPelements.innerHTML = data.title
    infoDivElement.append(mainPelements)

    const brElement = document.createElement('br')
    infoDivElement.append(brElement)

    const timeinfo = document.createElement('span')
    timeinfo.classList.add('time')
    timeinfo.innerText = data.date
    infoDivElement.append(timeinfo)

}

function secondInfobloks(data) {
   const secondBlok = document.getElementById('second-blok')

   const mainDiv = document.createElement('div')
   mainDiv.classList.add('more-info-bloks')
   secondBlok.append(mainDiv)

   const titleName = document.createElement( 'h4')
   titleName.innerText = 'Boshqa maqolalar'
   mainDiv.append(titleName)

   const articleElement = document.createElement('article')
   mainDiv.append(articleElement)

   const pElement = document.createElement('P')
   pElement.innerText = data.title;
   articleElement.append(pElement)

   const timeElement = document.createElement('span')
   timeElement.innerText = data.date
   articleElement.append(timeElement)

   const hrElement = document.createElement('hr')
   mainDiv.append(hrElement)

   const buttonAElement = document.createElement('a')
   buttonAElement.setAttribute("href" , "")
   mainDiv.append(buttonAElement)

//    const buttonElement = document.createElement('button')
//    buttonAElement.innerText = ("Barchasi")
//    buttonAElement.append(buttonElement)
    
}
window.addEventListener('load' , handleWindowLoad ); 