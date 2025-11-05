const usBtn = document.querySelector('.usa');
const ukBtn = document.querySelector('.uk');
const aussieBtn = document.querySelector('.aussie');

const us = document.querySelector('.aboutUsEnglish');
const uk = document.querySelector('.aboutUKEnglish');
const aus = document.querySelector('.aboutAussieEnglish');

usBtn.addEventListener('mouseenter', () => {
    us.style.display = 'flex';
    uk.style.display = 'none';
    aus.style.display = 'none';
})

ukBtn.addEventListener('mouseenter', () => {
    us.style.display = 'none';
    uk.style.display = 'flex';
    aus.style.display = 'none';
});

aussieBtn.addEventListener('mouseenter', () => {
    us.style.display = 'none';
    uk.style.display = 'none';
    aus.style.display = 'flex';
});

usBtn.addEventListener('mouseleave', () => {
    us.style.display = 'none';
    uk.style.display = 'none';
    aus.style.display = 'none';
})

ukBtn.addEventListener('mouseleave', () => {
    us.style.display = 'none';
    uk.style.display = 'none';
    aus.style.display = 'none';
});

aussieBtn.addEventListener('mouseleave', () => {
    us.style.display = 'none';
    uk.style.display = 'none';
    aus.style.display = 'none';
});
