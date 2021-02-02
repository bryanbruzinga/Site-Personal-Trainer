export default function activeClass(classe){

  const links = document.querySelectorAll(classe);

  function addClass(event) {
    event.preventDefault();
    links.forEach((link) => {
      link.classList.remove("ativo");
    });
    this.classList.add("ativo");
  }

  links.forEach((link) => {
    link.addEventListener("click", addClass);
  });
}
