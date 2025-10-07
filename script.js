let posicao = 0;
let vagaoAtual = 0;

function adicionarVagao() {
  vagaoAtual++;
  if (vagaoAtual === 1) {
    document.getElementById("vagao1").classList.remove("invisivel");
  } else if (vagaoAtual === 2) {
    document.getElementById("vagao2").classList.remove("invisivel");
  } else {
    alert("🚫 Você só pode adicionar até 2 vagões!");
    vagaoAtual = 2;
  }
}

function mover() {
  posicao += 20;
  document.getElementById("trem").style.left = posicao + "px";
}