const params = new URLSearchParams(window.location.search);

const video = params.get("video");
const nome = params.get("nome");

const player = document.getElementById("player");

player.src = video;

document.getElementById("nomeCanal").innerText =
nome || "TV PLUS";

function voltar(){
    window.location.href = "index.html";
}