const usBtn = document.querySelector('.usa');
const ukBtn = document.querySelector('.uk');
const aussieBtn = document.querySelector('.aussie');

const us = document.querySelector('.aboutUsEnglish');
const uk = document.querySelector('.aboutUKEnglish');
const aus = document.querySelector('.aboutAussieEnglish');

const usFlag = document.querySelector('.usFlag');
const ukFlag = document.querySelector('.ukFlag');
const aussieFlag = document.querySelector('.aussieFlag');

function exibirUS() {
    us.style.display = 'flex';
    uk.style.display = 'none';
    aus.style.display = 'none';
    usFlag.style.display = 'block';
}
function exibirUK() {
    us.style.display = 'none';
    uk.style.display = 'flex';
    aus.style.display = 'none';
    ukFlag.style.display = 'block';
}
function exibirAussie() {
    us.style.display = 'none';
    uk.style.display = 'none';
    aus.style.display = 'flex';
    aussieFlag.style.display = 'block';
}

function leave() {
    us.style.display = 'none';
    uk.style.display = 'none';
    aus.style.display = 'none';
    usFlag.style.display = 'none';
    ukFlag.style.display = 'none';
    aussieFlag.style.display = 'none';
}

