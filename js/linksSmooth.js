function initScrollSuave() {
    const linksInternos = document.querySelectorAll('#navbar a[href^="#"]')
    const linkTopo = document.querySelector('#seta-topo')

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)    

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    function scrollToTop(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    linkTopo.addEventListener('click', scrollToTop)

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}
initScrollSuave()