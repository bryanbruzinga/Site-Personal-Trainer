//Função para o navbar fixo
let nav = document.getElementById('navbar')
window.addEventListener('scroll', function() {
    if(window.pageYOffset > 500) {
        nav.style.background = "#000"
        nav.style.width = '100%'
        nav.style.zIndex = '1'
    }
    else{
        nav.style.background = "transparent"
    }
})