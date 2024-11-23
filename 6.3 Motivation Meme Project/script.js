function tocarEfeito() {
    var efeito = document.getElementById("efeito");
    efeito.volume = 0.5;
    efeito.play();
}

function soltarConfete() {
    tocarEfeito();
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
