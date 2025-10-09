let posicao = 0;
let vagaoAtual = 0;

function adicionarVagao() {
  if (vagaoAtual >= 4) {
    alert("🚫 Você já adicionou o número máximo de vagões!");
    return;
  }
  vagaoAtual++;
  const idDoVagao = `vagao${vagaoAtual}`;
  const vagaoParaMostrar = document.getElementById(idDoVagao);
  if (vagaoParaMostrar) {
    vagaoParaMostrar.classList.remove("invisivel");
  }
}
function removerVagao() {

  if (vagaoAtual <= 0) {
    alert("🚫 Não há mais vagões para remover!");
    vagaoAtual = 0;
    return;
  }

  const idDoVagao = `vagao${vagaoAtual}`;
  const vagaoParaEsconder = document.getElementById(idDoVagao);


  if (vagaoParaEsconder) {
    vagaoParaEsconder.classList.add("invisivel");
  }


  vagaoAtual--;

  posicao = 0;
  document.getElementById("trem").style.left = "0px";
}



function mover() {
  if (vagaoAtual === 0) {
    alert('Adicione um vagão antes de mover o trem!');
    return;
  }

  const trem = document.getElementById("trem");
  const chegada = document.getElementById("chegada");

  const incremento = (vagaoAtual > 2) ? 40 : 80;
  posicao += incremento;

  trem.style.left = posicao + "px";

  // --- A MÁGICA ACONTECE AQUI ---
  const tremRect = trem.getBoundingClientRect();
  const chegadaRect = chegada.getBoundingClientRect();

  if (tremRect.right >= chegadaRect.left) {
    alert("🎉 Chegou ao destino! O trem vai voltar ao início.");
    posicao = 0;
    trem.style.left = posicao + "px"; 
    return; 
  }
  // --- FIM DA VERIFICAÇÃO ---

  // Lógica para não deixar o trem passar do limite da tela (se você tiver uma)
  /* if (posicao >= limiteDireito) {
    posicao = limiteDireito;
    trem.style.left = posicao + "px";
  }
  */
}