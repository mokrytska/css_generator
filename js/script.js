let openButton = document.querySelector('.header');
let tilesSection = document.querySelector('.tiles');
let tilesList = document.querySelectorAll('.tiles__item');
let blocksList = document.querySelectorAll('.generator__item');
let nameHeader = document.querySelector('.header__label');

openButton.addEventListener('click', function () {
    tilesSection.classList.toggle('tiles--opened');
    for (let j = 0; j < blocksList.length; j++) {
        blocksList[j].style.display = 'none';
    }
});

for (let i = 0; i < tilesList.length; i++) {
    tilesList[i].addEventListener('click', function (event) {
        tilesSection.classList.toggle('tiles--opened');

        for (let j = 0; j < blocksList.length; j++) {
            if (j == i) {
                blocksList[j].style.display = 'block';
                nameHeader.innerText = tilesList[i].textContent;
            }
            else {
                blocksList[j].style.display = 'none';
            }
        }

    })
    
}

initBorderRadius();
initBoxShadow();
initTextShadow();
initRGBA();




initMultipleColumns() ;
initTransition();
initTransform();
initFlexBox();

