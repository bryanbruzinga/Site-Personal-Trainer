let banner = ["css/images/home1.png", "css/images/home2.png", "css/images/home3.png"]
let bannerAtual = 0
let h1text = ["Saúde", "Energia", "Estilo de Vida"]

function imgChanger() {
    bannerAtual = (bannerAtual + 1) %3
    document.querySelector('img#img-home').src = banner[bannerAtual]
}

function h1TxtChanger() {
    bannerAtual = (bannerAtual + 1) %3
    document.querySelector('h1#demo-title').innerHTML = h1text[bannerAtual]
}

setInterval(imgChanger, 4000)
setInterval(h1TxtChanger, 4000)

window.onload = imgChanger()
