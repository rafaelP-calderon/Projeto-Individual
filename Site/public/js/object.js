var displayContainer = document.querySelector(".displayLater");
var displayHide = document.querySelector(".displayNow");

var objects = [
                {
                    img: 'https://placehold.co/200x200',
                    answer: 'apple'
                },
                {
                    img: 'https://placehold.co/200x200',
                    answer: 'banana'
                },
                {
                    img: 'https://placehold.co/200x200',
                    answer: 'orange'
                },
                {
                    img: 'https://placehold.co/200x200',
                    answer: 'pear'
                }
              ];

function sendAnswer() {
    displayContainer.style.display = 'flex';
    displayHide.style.display = 'none';
}