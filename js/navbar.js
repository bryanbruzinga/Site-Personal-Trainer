//Função para o navbar fixo
let nav = document.getElementById('header')
window.addEventListener('scroll', function() {
    if(window.pageYOffset > 500) {
        nav.classList.remove('nav-fixed-off')
        nav.classList.add('nav-fixed-on')
    }
    else{
        nav.classList.remove('nav-fixed-on')
        nav.classList.add('nav-fixed-off')
    }
})