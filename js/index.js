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

const linksCazeTV = [

    "https://www2.embedtv.best/caze1",
    "https://www2.embedtv.best/caze2",
    "https://www2.embedtv.best/caze3"

];

const linksParamount = [

    "https://www2.embedtv.best/paramountplus",
    "https://www2.embedtv.best/paramountplus2"

];

const linksSportv = [

    "https://www2.embedtv.best/sportv",
    "https://www2.embedtv.best/sportv2",
    "https://www2.embedtv.best/sportv3",
    "https://www2.embedtv.best/sportv4"

];

const linksEspn = [

    "https://www2.embedtv.best/espn",
    "https://www2.embedtv.best/espn2",
    "https://www2.embedtv.best/espn3",
    "https://www2.embedtv.best/espn4",
    "https://www2.embedtv.best/espn5",
    "https://www2.embedtv.best/espn6"

];

const linksDisney = [

    "https://www2.embedtv.best/disneyplus1",
    "https://www2.embedtv.best/disneyplus2",
    "https://www2.embedtv.best/disneyplus3"
   
];

const linksMax = [

    "https://www2.embedtv.best/max1",
    "https://www2.embedtv.best/max2",
    "https://www2.embedtv.best/max3"
   
];

const canaisInfantis = [

    {
        nome: "Cartoon Network",
        logo: "img/cartoonnetwork.png",
        link: "https://www2.embedtv.best/cartoonnetwork"
    },

    {
        nome: "Cartoonito",
        logo: "img/cartoonito.png",
        link: "https://www2.embedtv.best/cartoonito"
    },

    {
        nome: "Os Simpsons 24h",
        logo: "img/24h.png",
        link: "https://www2.embedtv.best/24h_simpsons"
    },

    {
        nome: "Nickelodeon",
        logo: "img/nickelodeon.png",
        link: "https://www2.embedtv.best/nickelodeon"
    },

    {
        nome: "Gloob",
        logo: "img/gloob.png",
        link: "https://www2.embedtv.best/gloob"
    },

    {
        nome: "Discovery Kids",
        logo: "img/discoverykids.png",
        link: "https://www2.embedtv.best/discoverykids"
    }

];

const canaisDocumentario = [

    {
        nome: "Animal Planet",
        logo: "img/animalplanet.png",
        link: "https://www2.embedtv.best/animalplanet"
    },

    {
        nome: "Discovery Channel",
        logo: "img/discoverychannel.png",
        link: "https://www2.embedtv.best/discoverychannel"
    },

    {
        nome: "Discovery H&H",
        logo: "img/discoveryhh.png",
        link: "https://www2.embedtv.best/discoveryhh"
    },

    {
        nome: "History",
        logo: "img/history.png",
        link: "https://www2.embedtv.best/history"
    },

    {
        nome: "Discovery World",
        logo: "img/discoveryworld.png",
        link: "https://www2.embedtv.best/discoveryword"
    },

    {
        nome: "Fish TV",
        logo: "img/fishtv.png",
        link: "https://www2.embedtv.best/fish"
    }

];

const canaisFilmeseSéries = [

    {
        nome: "Adult Swim",
        logo: "img/adultswim.png",
        link: "https://www2.embedtv.best/adultswim"
    },

    {
        nome: "TNT",
        logo: "img/tnt.png",
        link: "https://www2.embedtv.best/tnt"
    },

    {
        nome: "Paramount",
        logo: "img/paramountchannel.png",
        link: "https://www2.embedtv.best/paramountchannel"
    },

    {
        nome: "Sony Channel",
        logo: "img/sonychannel.png",
        link: "https://www2.embedtv.best/sonychannel"
    },

    {
        nome: "Telecine Pipoca",
        logo: "img/telecinepipoca.png",
        link: "https://www2.embedtv.best/telecinepipoca"
    },

    {
        nome: "Cinemax",
        logo: "img/cinemax.png",
        link: "https://www2.embedtv.best/cinemax"
    },

    {
        nome: "Telecine Premium",
        logo: "img/telecinepremium.png",
        link: "https://www2.embedtv.best/telecinepremium"
    }

];

// =============================
// FUNÇÃO PARA CARREGAR CANAIS INFANTIS
// =============================

function carregarCanais(lista, idCarrossel)
{
    const carrossel = document.getElementById(idCarrossel);

    if(!carrossel) return;

    lista.forEach(canal =>
    {
        const item = document.createElement("div");
        item.className = "canal";

        item.innerHTML = `
            <div class="card">

                <div class="card-img">
                    <img src="${canal.logo}" class="${canal.classe || ''}">

                    <div class="overlay">
                        ▶ Assistir
                    </div>
                </div>

                <p class="titulo">${canal.nome}</p>

            </div>
        `;

        item.onclick = () =>
        {
            window.location.href =
                "player.html?video=" +
                encodeURIComponent(canal.link) +
                "&nome=" +
                encodeURIComponent(canal.nome);
        };

        carrossel.appendChild(item);
    });
}


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

        function carregarCanais(lista, idCarrossel)
    {
        const carrossel = document.getElementById(idCarrossel);

        lista.forEach(canal =>
        {
            const item = document.createElement("div");
            item.className = "canal";

            item.innerHTML = `
                <a href="${canal.link}">
                    <img src="${canal.logo}">
                    <p>${canal.nome}</p>
                </a>
            `;

            carrossel.appendChild(item);
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
// FILTRO
// =============================

function filtrarCategoria(categoria)
{
    const secoes = document.querySelectorAll(".secao");

    let primeiraEncontrada = false;

    secoes.forEach(secao =>
    {
        const categorias = secao.dataset.categoria || "";

        if(!categoria || categorias.includes(categoria))
        {
            secao.style.display = "block";

            if(!primeiraEncontrada)
            {
                secao.classList.add("primeira-visivel");
                primeiraEncontrada = true;
            }
            else
            {
                secao.classList.remove("primeira-visivel");
            }
        }
        else
        {
            secao.style.display = "none";
            secao.classList.remove("primeira-visivel");
        }
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

iniciarCarrossel(
    "carrossel-cazetv",
    linksCazeTV,
    "CazeTV",
    "img/cazetv.png"
);

iniciarCarrossel(
    "carrossel-sportv",
    linksSportv,
    "Sportv",
    "img/sportv.png"
);

iniciarCarrossel(
    "carrossel-espn",
    linksEspn,
    "ESPN",
    "img/espn.png"
);

iniciarCarrossel(
    "carrossel-disney",
    linksDisney,
    "Disney",
    "img/disneyplus.png"
);

iniciarCarrossel(
    "carrossel-max",
    linksMax,
    "Max",
    "img/max.png"
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

function abrirVPNPopup()
{
    document.getElementById("vpn-info-popup").classList.remove("hidden");
}

function fecharVPNPopup()
{
    document.getElementById("vpn-info-popup").classList.add("hidden");
}

// =============================
// TRÊS BARRAS MOBILE
// =============================

function toggleMenu()
{
    const menu = document.getElementById("menu");

    menu.classList.toggle("ativo");
}

document.querySelectorAll(".menu a").forEach(link =>
{
    link.addEventListener("click", () =>
    {
        document.getElementById("menu").classList.remove("ativo");
    });
});

carregarCanais(canaisInfantis, "carrossel-infantil");
carregarCanais(canaisDocumentario, "carrossel-documentario");
carregarCanais(canaisFilmeseSéries, "carrossel-filmeseseries");

// =============================
// REMOVE LINHA
// =============================

document.addEventListener("DOMContentLoaded", () =>
{
    filtrarCategoria(); // mostra tudo e define a primeira corretamente
});