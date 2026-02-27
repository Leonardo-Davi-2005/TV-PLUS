// =============================
// LINKS DOS CANAIS
// =============================

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

const linksParamount = [

    "https://www2.embedtv.best/paramountplus",
    "https://www2.embedtv.best/paramountplus2"

];


// =============================
// CRIAR CARROSSEL COMPLETO
// =============================

function iniciarCarrossel(id, links, nomeCanal, imagem)
{

    const carrossel = document.getElementById(id);

    if(!carrossel) return;

    let bloqueado = false;


    // criar cards 3x (loop infinito)
    for(let x = 0; x < 3; x++)
    {
        links.forEach((link, i)=>
        {
            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `

                <div class="card-img">

                    <img src="${imagem}">

                    <div class="overlay">
                        ▶ Assistir
                    </div>

                </div>

                <p class="titulo">${nomeCanal} ${i+1}</p>

            `;

            card.onclick = () =>
            {
                window.location.href =
                    "player.html?video=" +
                    encodeURIComponent(link) +
                    "&nome=" +
                    encodeURIComponent(nomeCanal + " " + (i+1));
            };

            carrossel.appendChild(card);
        });
    }


    // posicionar no meio
    setTimeout(()=>{
        carrossel.scrollLeft = carrossel.scrollWidth / 3;
    },100);


    // loop infinito suave
    carrossel.addEventListener("scroll", ()=>{

        if(bloqueado) return;

        const larguraTotal = carrossel.scrollWidth;
        const larguraVisivel = carrossel.clientWidth;
        const posicao = carrossel.scrollLeft;

        const pontoInicio = larguraTotal / 3;

        if(posicao <= 0 || posicao + larguraVisivel >= larguraTotal)
        {
            bloqueado = true;

            carrossel.scrollLeft = pontoInicio;

            setTimeout(()=> bloqueado = false, 50);
        }

    });


    // scroll com mouse
    carrossel.addEventListener("wheel", (e)=>{

        e.preventDefault();

        carrossel.scrollLeft += e.deltaY;

    });

}


// =============================
// BOTÕES LATERAIS
// =============================

function rolar(id, direcao)
{

    const carrossel = document.getElementById(id);

    carrossel.scrollBy({

        left: direcao * 320,
        behavior: "smooth"

    });

}


// =============================
// INICIAR TODOS
// =============================

iniciarCarrossel(
    "carrossel-premiere",
    linksPremiere,
    "Premiere",
    "img/premiere.png"
);


iniciarCarrossel(
    "carrossel-paramount",
    linksParamount,
    "Paramount",
    "img/paramountplus.png"
);


// =============================
// POPUP VPN
// =============================

const popup = document.getElementById("vpn-popup");

if(popup)
{
    if(!localStorage.getItem("vpnAvisoMostrado"))
    {
        popup.classList.remove("hidden");
    }
}

function fecharPopup()
{
    popup.classList.add("hidden");

    localStorage.setItem("vpnAvisoMostrado", "true");
}