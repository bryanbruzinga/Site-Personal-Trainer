class RolagemSuave {
    constructor(links) {
        this.linkElements = document.querySelectorAll(links)

        this.addClickEvent()//Isso faz com que sempre seja executado
    }
    //Métodos
    handleClick(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        window.scrollTo({
            top: section.offsetTop - (window.innerHeight - section.clientHeight)/2, //Cálculo para ficar mais centralizado
            behavior: "smooth"
        })
        console.log(section)
    }
    addClickEvent() {
        this.linkElements.forEach(link =>{
            link.addEventListener('click', this.handleClick)
        })
    }
    
}
//^= dentro do href significa que começa com
const scroll = new RolagemSuave("a[href^='#'")
console.log(href)