export default function mudarImg() {
  let banner = [
    "css/images/home1.png",
    "css/images/home2.png",
    "css/images/home3.png",
  ];
  let bannerAtual = 0;
  let h1text = ["Saúde", "Energia", "Estilo de Vida"];

  function imgChanger() {
    bannerAtual = (bannerAtual + 1) % 3;
    document.querySelector(
      ".header"
    ).style.backgroundImage = `url(${banner[bannerAtual]})`;
    document.querySelector(".container-home h1").innerHTML = h1text[bannerAtual];
  }

  setInterval(imgChanger, 4000);

  window.onload = imgChanger();
}
