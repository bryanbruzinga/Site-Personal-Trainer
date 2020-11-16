let banner = ["css/images/home1.png", "css/images/home2.png", "css/images/home3.png"]
let bannerAtual = 0
let h1text = ["Karla Personal Trainer", "Fique Saudável", "Mude Seu Estilo de Vida"]
/*let text = ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque debitis et sint quisquam sunt, ducimus facere temporibus beatae deserunt est, nobis adipisci quis exercitationem aperiam reiciendis reprehenderit officiis fuga atque.",
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"]*/

function imgChanger() {
    bannerAtual = (bannerAtual + 1) %3
    document.querySelector('img#img-home').src = banner[bannerAtual]
}

function h1TxtChanger() {
    bannerAtual = (bannerAtual + 1) %3
    document.querySelector('h1#demo-title').innerHTML = h1text[bannerAtual]
}

/*function txtChanger() {
    bannerAtual = (bannerAtual + 1) %3
    document.querySelector('p.demo-text').innerHTML = text[bannerAtual]
}*/

setInterval(imgChanger, 4000)
setInterval(h1TxtChanger, 4000)
//setInterval(txtChanger, 4000)
