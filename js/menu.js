const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')
const actionLinks = document.querySelectorAll('.action-link')
const menu = document.querySelector('.menu')

menuIcon.addEventListener('click', openMenu)
closeIcon.addEventListener('click', closeMenu)

actionLinks.forEach((link) => { link.addEventListener('click', closeMenu) })

window.addEventListener('resize', () => {

    if (window.innerWidth >= 1000) { openMenu()

        menu.style.display = 'flex'
        menuIcon.style.display = 'none'

    } else {

        menu.style.display = 'none'
        menuIcon.style.display = 'block'

    }
})

function openMenu() {
    menu.style.display = 'flex'
    menuIcon.style.display = 'none'
}

function closeMenu() {
    menu.style.display = 'none'
    menuIcon.style.display = 'block'
}