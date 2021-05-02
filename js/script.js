let openButton = document.querySelector('.header');
let tilesSection = document.querySelector('.tiles');

openButton.addEventListener('click', function () {
    tilesSection.classList.toggle('tiles--opened');

})