export default function menuMobile() {
    const listaMenu = document.querySelector('.list');
    const botaoMenu = document.querySelector('.mobile-menu-button');
    const itensLista = document.querySelectorAll('.list a[href^="#"]');
    const html = document.documentElement;

    function abrirMenu(event) {
        event.preventDefault();
        listaMenu.classList.add('active');
        botaoMenu.classList.add('active');        
    }

    function fecharMenu() {
        listaMenu.classList.remove('active');
        botaoMenu.classList.remove('active');
    }

    function fecharMenuClickFora(event) {        
        if(!listaMenu.contains(event.target) && !botaoMenu.contains(event.target)) {
            fecharMenu();
        }        
    }

    itensLista.forEach((item) => {
        item.addEventListener('click', fecharMenu)
    });
    botaoMenu.addEventListener('click', abrirMenu);
    html.addEventListener('click', fecharMenuClickFora);
}