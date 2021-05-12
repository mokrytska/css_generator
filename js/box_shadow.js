function initBoxShadow () {
    let exampleBlock = document.querySelector('.generator__item--boxshadow');
    let InputHorLength = document.querySelector('.generator__input--horisontal-length');
    let InputVertLength = document.querySelector('.generator__input--vertical-length');
    let InputBlurRadius = document.querySelector('.generator__input--Blur-radius');
    let InputSpread = document.querySelector('.generator__input--spread');

InputHorLength.addEventListener('input', function () {
    exampleBlock.style.BoxShadowHorisontalLength = InputHorLength.value + 'px';
})

}