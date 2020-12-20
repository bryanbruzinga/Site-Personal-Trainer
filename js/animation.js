function animationPage() {
    const sections = document.querySelectorAll('.js-anim')
    const screenSize = window.innerHeight * 0.6

    function animaScroll() {
        sections.forEach((item) => {
            const sectionTop = item.getBoundingClientRect().top
            const isItVisible = (sectionTop - screenSize) < 0
            if(isItVisible) {
                item.classList.add('ativo')
            } else {
                item.classList.remove('ativo')
            }
        })
    }
    animaScroll()

    window.addEventListener('scroll', animaScroll)
}
animationPage()