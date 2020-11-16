//Função para o navbar fixo
let nav = document.getElementById('navbar')
window.addEventListener('scroll', function() {
    if(window.pageYOffset > 500) {
        nav.style.background = "#000"
        nav.style.width = '100%'
        nav.style.padding = '50px'
        nav.style.opacity = '0.9'
        nav.style.top = '0px'
        nav.style.zIndex = '1'
    }
    else{
        nav.style.background = "transparent"
    }
})