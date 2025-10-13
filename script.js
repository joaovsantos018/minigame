let posicao = 0;
let vagaoAtual = 0;

let imagemAddVagaoAdicionada = false;
let imagemRemoveVagaoAdicionada = false;
let imagemCorrerVagaoAdicionada = false; // Variável para controle da imagem de mover

function adicionarVagao() {
  if (vagaoAtual >= 4) {
    alert("🚫 Você já adicionou o número máximo de vagões!");
    return;
  }

  vagaoAtual++;

  if (!imagemAddVagaoAdicionada) {
    const imgDiv = document.querySelector('.imagesDiv');
    const printAddVagao = document.createElement('img');
    printAddVagao.src = './icones/addVagao.png';
    printAddVagao.classList.add('printCode');
    imgDiv.appendChild(printAddVagao);
    imagemAddVagaoAdicionada = true;
  }

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

  if (!imagemRemoveVagaoAdicionada) {
    const imgDiv = document.querySelector('.imagesDiv');
    const printRemoveVagao = document.createElement('img');
    printRemoveVagao.src = './icones/removeVagao.png';
    printRemoveVagao.classList.add('printCode');
    imgDiv.appendChild(printRemoveVagao);
    imagemRemoveVagaoAdicionada = true;
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

  if (!imagemCorrerVagaoAdicionada) {
    const imgDiv = document.querySelector('.imagesDiv');
    const printMoverVagao = document.createElement('img');
    printMoverVagao.src = './icones/moverVagao.png'; 
    printMoverVagao.classList.add('printCode');
    imgDiv.appendChild(printMoverVagao);
    imagemCorrerVagaoAdicionada = true;
  }

  let incremento;

  if (vagaoAtual > 2) {
    incremento = 40;
  } else {
    incremento = 80;
  }

  posicao += incremento;
  trem.style.left = posicao + "px";

  const tremRect = trem.getBoundingClientRect();
  const chegadaRect = chegada.getBoundingClientRect();

  if (tremRect.right >= chegadaRect.left) {
    alert("🎉 Chegou ao destino! O trem vai voltar ao início.");
    posicao = 0;
    trem.style.left = posicao + "px";

    const imgDiv = document.querySelector('.imagesDiv');
    imgDiv.innerHTML = "";

    imagemAddVagaoAdicionada = false;
    imagemRemoveVagaoAdicionada = false;
    imagemCorrerVagaoAdicionada = false; 

    return;
  }

  if (posicao >= limiteDireito) {
    posicao = limiteDireito;
    trem.style.left = posicao + "px";
  }
}
