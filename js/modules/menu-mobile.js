export default function menuMobile() {
    const listaMenu = document.querySelector('.list');
    const botaoMenu = document.querySelector('.mobile-menu-button');

    function handleMenu() {
        if(listaMenu.style.display === 'block') {
            listaMenu.style.display = 'none';
            listaMenu.classList.remove('active');
            botaoMenu.classList.remove('active');
        }
        else {
            listaMenu.style.display= 'block';
            listaMenu.classList.add('active');
            botaoMenu.classList.add('active'); 
        } 
    }

    botaoMenu.addEventListener('click', handleMenu);    
}
