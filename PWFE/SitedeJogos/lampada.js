const botaoLig = document.getElementById("botaoLig"); // Cria uma constante e atribui o botão Liga HTML
const botaoDes = document.getElementById("botaoDes"); // Cria uma constante e atribui o botão Desliga HTML
const resetar = document.getElementById("resetar"); // Cria uma constante e atribui o botão Resetar HTML
const lamp = document.getElementById("lamp"); // Cria uma constante e vincula com o ID lamp
var contClik = 0; // Inicializa a variável de contagem de cliques com 0

function lampON() {
  if (contClik < 10) {
    lamp.src = "img/LampadaAcessa.png";
    contClik++; // Incrementa a contagem de cliques quando a lâmpada é ligada
    alert(`Lâmpada ligada! Total de cliques: ${contClik}`);
  } else {
    lampDeuRuim(); // Chama a função que quebra a lâmpada após 10 cliques
    alert("A lâmpada quebrou!");
  }
}

function lampOFF() {
  lamp.src = "img/LampadaApagada2.png";
}

function resetarEstado() {
  lamp.src = "img/LampadaApagada2.png";
  contClik = 0; // Reinicia a contagem de cliques ao resetar
  botaoLig.addEventListener("click", lampON); // Reativa o evento de clique no botão de ligar ao resetar
  botaoDes.addEventListener("click", lampOFF); // Reativa o evento de clique no botão de desgar ao resetar
}

function lampDeuRuim() {
  lamp.src = "img/LampadaQuebrado3.png";
  botaoLig.removeEventListener("click", lampON); // Remove o evento de clique no botão de ligar após a quebra da lâmpada
  botaoDes.removeEventListener("click", lampOFF); // Remove o evento de clique no botão de desligar após a quebra da lâmpada
}

// Comandos de Ação Para os Botões
botaoLig.addEventListener("click", lampON);
botaoDes.addEventListener("click", lampOFF);
resetar.addEventListener("click", resetarEstado);

