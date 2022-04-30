const sidebar = document.querySelector('#sidebar')
const toggleSidebarIcons = document.querySelector('.toggle-sidebar-icons')

const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')

function openOrCloseSidebar() {
    menuIcon.classList.toggle('hide')
    closeIcon.classList.toggle('hide')
    sidebar.classList.toggle('show')
}

toggleSidebarIcons.addEventListener('click', () => {
    openOrCloseSidebar()
})

toggleSidebarIcons.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        openOrCloseSidebar()
    }
})

const sidebarLinks = document.querySelectorAll('#sidebar .links li a')
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        openOrCloseSidebar()
    })

    link.addEventListener('keypress', (event) => {
        if(event.keyCode === 13) {
            openOrCloseSidebar()
        }
    })
})