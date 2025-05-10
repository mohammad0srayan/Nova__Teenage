let loaderElem = document.querySelector('.loader')
let menuSidebar = document.querySelector('.open')
let open = document.querySelector('.open-side')
let closeSide = document.querySelector('.close')
let sidebar = document.querySelector('.sidebar')

let sideFlag = false

menuSidebar.addEventListener('click',function () {
    if (sideFlag) {
        sidebar.classList.remove('active')
        closeSide.style.display = 'none'
        open.style.display = 'flex'
        sideFlag = false
    } else {
        sidebar.classList.add('active')
        closeSide.style.display = 'flex'
        open.style.display = 'none'
        sideFlag = true
    }

    console.log(sideFlag)
})

window.addEventListener('load', function () {
    loaderElem.classList.add('hidden')
})