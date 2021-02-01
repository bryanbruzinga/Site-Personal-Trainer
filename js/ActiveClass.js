const links = document.querySelectorAll('a[href^="#"')

function addClass(event){
    event.preventDefault()
    links.forEach((link) => {
        link.classList.remove('ativo')        
    })
    this.classList.add('ativo')
}

links.forEach((link) => {
    link.addEventListener('click', addClass)
})