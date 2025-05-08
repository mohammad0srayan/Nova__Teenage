let loaderElem = document.querySelector('.loader')
let menuSidebar = document.querySelector('.open')
let sidebar = document.querySelector('.sidebar')

menuSidebar.addEventListener('click',function () {
    sidebar.classList.toggle('active')
})


window.addEventListener('load', function () {
    loaderElem.classList.add('hidden')
})