const params = new URLSearchParams(window.location.search);

const video = params.get("video");
const nome = params.get("nome");

const player = document.getElementById("player");
const titulo = document.getElementById("nomeCanal");

// validação básica
if (video) {
    player.src = video;
}
else {
    alert("Erro: vídeo não encontrado");
}

// título
titulo.innerText = nome || "TV PLUS";

// voltar
function voltar() {
    window.location.href = "index.html";
}

// FULLSCREEN TOGGLE (melhorado)
function abrirFullscreen() {
    if (!document.fullscreenElement) {
        player.requestFullscreen();
    }
    else {
        document.exitFullscreen();
    }
}