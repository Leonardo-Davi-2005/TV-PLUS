const carrossel = document.getElementById("carrossel");

const linksPremiere = [

    "https://www2.embedtv.best/premiere",
    "https://www2.embedtv.best/premiere2",
    "https://www2.embedtv.best/premiere3",
    "https://www2.embedtv.best/premiere4",
    "https://www2.embedtv.best/premiere5",
    "https://www2.embedtv.best/premiere6",
    "https://www2.embedtv.best/premiere7",
    "https://www2.embedtv.best/premiere8"

];

const total = linksPremiere.length;


// CRIAR CARDS (3x para infinito perfeito)
function criarCards(){

    for(let x = 0; x < 3; x++){

        linksPremiere.forEach((link, i)=>{

            criarCard(link, i);

        });

    }

}


// CRIAR CARD INDIVIDUAL
function criarCard(link, i){

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `

        <div class="card-img">

            <img src="img/premiere.png">

            <div class="overlay">
                ▶ Assistir
            </div>

        </div>

        <p class="titulo">Premiere ${i+1}</p>

    `;

    card.onclick = ()=>{

        window.location.href =
            "player.html?video=" +
            encodeURIComponent(link) +
            "&nome=" +
            encodeURIComponent("Premiere "+(i+1));

    };

    carrossel.appendChild(card);

}


// iniciar
criarCards();


// POSICIONAR NO MEIO REAL
setTimeout(()=>{

    carrossel.scrollLeft = carrossel.scrollWidth / 3;

}, 100);



// LOOP INFINITO SUAVE (SEM TRAVAR)
let bloqueado = false;

carrossel.addEventListener("scroll", ()=>{

    if(bloqueado) return;

    const larguraTotal = carrossel.scrollWidth;
    const larguraVisivel = carrossel.clientWidth;
    const posicao = carrossel.scrollLeft;

    const pontoInicio = larguraTotal / 3;
    const pontoFim = pontoInicio * 2;

    if(posicao <= 0){

        bloqueado = true;

        carrossel.scrollLeft = pontoInicio;

        setTimeout(()=> bloqueado = false, 50);

    }

    else if(posicao + larguraVisivel >= larguraTotal){

        bloqueado = true;

        carrossel.scrollLeft = pontoInicio;

        setTimeout(()=> bloqueado = false, 50);

    }

});



// SCROLL HORIZONTAL COM MOUSE
carrossel.addEventListener("wheel", (e)=>{

    e.preventDefault();

    carrossel.scrollLeft += e.deltaY;

});




// BOTÕES LATERAIS (se usar)
function rolar(direcao){

    carrossel.scrollBy({

        left: direcao * 320,
        behavior: "smooth"

    });

}



// POPUP VPN
const popup = document.getElementById("vpn-popup");

if(popup){

    if(!localStorage.getItem("vpnAvisoMostrado")){

        popup.classList.remove("hidden");

    }

}

function fecharPopup(){

    popup.classList.add("hidden");

    localStorage.setItem("vpnAvisoMostrado", "true");

}