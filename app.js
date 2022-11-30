const sidebar = document.querySelector('.sidebar')
const toggle = document.querySelector('.sidebar .toggle')
toggle.addEventListener('click', () => {
    if (sidebar.className === 'sidebar') {
        sidebar.classList.add('open')
    } else {
        sidebar.classList.remove('open')
    }
})

const navItems = document.querySelectorAll('nav .nav-item')

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        navItems.forEach(navItem => {
            navItem.classList.remove('active')
        })
        navItem.classList.add('active')
    })
})