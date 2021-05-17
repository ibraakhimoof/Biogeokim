window.onload = function() {
    document.querySelector('.header-burger').addEventListener('click', function() {
        document.querySelector('.header-burger').classList.toggle('active')
        document.querySelector('.navigation').classList.toggle('active')
        document.querySelector('.info-bar').classList.toggle('active')
        document.querySelector('#uzlang').innerText = 'Uzbek'
        document.querySelector('#rulang').innerText = 'Russian'
        document.querySelector('#enlang').innerText = 'English'
    })
}