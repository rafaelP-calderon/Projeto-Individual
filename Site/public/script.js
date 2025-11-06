const usBtn = document.querySelector('.usa');
const ukBtn = document.querySelector('.uk');
const aussieBtn = document.querySelector('.aussie');

const us = document.querySelector('.aboutUsEnglish');
const uk = document.querySelector('.aboutUKEnglish');
const aus = document.querySelector('.aboutAussieEnglish');

const usFlag = document.querySelector('.usFlag');
const ukFlag = document.querySelector('.ukFlag');
const aussieFlag = document.querySelector('.aussieFlag');

usBtn.addEventListener('mouseenter', () => {
    us.style.display = 'flex';
    uk.style.display = 'none';
    aus.style.display = 'none';
    usFlag.style.display = 'block';
})

ukBtn.addEventListener('mouseenter', () => {
    us.style.display = 'none';
    uk.style.display = 'flex';
    aus.style.display = 'none';
    ukFlag.style.display = 'block';
});

aussieBtn.addEventListener('mouseenter', () => {
    us.style.display = 'none';
    uk.style.display = 'none';
    aus.style.display = 'flex';
    aussieFlag.style.display = 'block';
});

usBtn.addEventListener('mouseleave', () => {
    us.style.display = 'none';
    uk.style.display = 'none';
    aus.style.display = 'none';
    usFlag.style.display = 'none';
})

ukBtn.addEventListener('mouseleave', () => {
    us.style.display = 'none';
    uk.style.display = 'none';
    aus.style.display = 'none';
    ukFlag.style.display = 'none';
});

aussieBtn.addEventListener('mouseleave', () => {
    us.style.display = 'none';
    uk.style.display = 'none';
    aus.style.display = 'none';
    aussieFlag.style.display = 'none';
});

function encaminharCadastro() {
    window.location.href = 'cadastro.html';
}

function encaminharLogin() {
    window.location.href = 'login.html';
}
