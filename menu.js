const menuELements = document.querySelectorAll('.menu__link')

const activeMenu = () => {

    menuELements.forEach(menuElement => {
        menuElement.addEventListener('click', () => {
            document.querySelector('.menu__link--active')?.classList.remove('menu__link--active')
            menuElement.classList.add('menu__link--active')
        })
    })
}
activeMenu()

const deactivateMenu = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id')
                    menuELements.forEach(menuElement => {
                        menuElement.classList.toggle('menu__link--active', menuElement.getAttribute('href') === `#${id}`)
                    })
                }
            })
        }, {
            rootMargin:'0px',
            threshold: 0.2 //20% of the div visible
        })
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section)
        })
    })

}
deactivateMenu()

const toggleResponsiveMenu = () => {
    const menuBtn = document.querySelector('.responsive-menu__icon')
    const menuWindow = document.querySelector('.responsive-menu__window')
  
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('responsive-menu__icon')
        menuBtn.classList.toggle('responsive-menu__close')
        menuWindow.classList.toggle('responsive-menu__window--visible')
    })

}
toggleResponsiveMenu()

const activeResponsiveMenu = () => {
    const menuElements = document.querySelectorAll('.responsive-menu__link')
    const menuBtn = document.querySelector('.responsive-menu__icon')
    const menuWindow = document.querySelector('.responsive-menu__window')

    menuElements.forEach(menuElement => {
        menuElement.addEventListener('click', () => {
            menuBtn.classList.toggle('responsive-menu__icon')
            menuBtn.classList.toggle('responsive-menu__close')
            menuWindow.classList.toggle('responsive-menu__window--visible')
        })
    })
}
activeResponsiveMenu()