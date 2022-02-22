const betSND= new Audio("./assets/403010__inspectorj__ui-confirmation-alert-b2.wav");
function betBtn(){
    betSND.play();
}
const btnSND= new Audio("./assets/146717__leszek-szary__button.wav");
function defaultBTN(){
    btnSND.play();
}
const winSND= new Audio("./assets/274183__littlerobotsoundfactory__jingle-win-synth-04.wav");
function youWin(){
    winSND.play();
}
const lostSND= new Audio("./assets/342756__rhodesmas__failure-01.wav");
function youLost(){
    lostSND.play();
}
document.getElementById("hitBtn").addEventListener("click", defaultBTN);
