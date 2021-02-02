export default function menuMobile() {
    const listaMenu = document.querySelector('.list');
    const botaoMenu = document.querySelector('.mobile-menu-button');

    function abrirMenu(event) {
        event.preventDefault();
        listaMenu.classList.add('active');
        botaoMenu.classList.add('active');
    }


    botaoMenu.addEventListener('click', abrirMenu);
}