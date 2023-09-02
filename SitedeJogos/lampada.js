const botaoLig = document.getElementById('botaoLig');
const botaoDes = document.getElementById('botaoDes');
const lamp = document.getElementById('lamp');

function lampON () {
    lamp.src='img/LampadaAcessa.jfif';
}

botaoLig.addEventListener('clik', lampON);

