function initBoxShadow () {
    let exampleBlock = document.querySelector('.generator__item--boxshadow');
    let InputHorLength = document.querySelector('.generator__input--horisontal-length');
    let InputVertLength = document.querySelector('.generator__input--vertical-length');
    let InputBlurRadius = document.querySelector('.generator__input--Blur-radius');
    let InputSpread = document.querySelector('.generator__input--spread');
    let InputHex = document.querySelector('.generator__input--Hex')

InputHorLength.addEventListener('input', function () {
    exampleBlock.style.BoxShadowHorisontalLength = InputHorLength.value + 'px';
})

InputVertLength.addEventListener('input', function () {
    exampleBlock.style.BoxShadowVerticalLength = InputVertLength.value + 'px';
})

InputBlurRadius.addEventListener('input', function () {
    exampleBlock.style.BoxShadowBlurRadiius = InputBlurRadius.value + 'px';
})

InputSpread.addEventListener('input', function () {
    exampleBlock.style.BoxShadowSpread = InputSpread.value + 'px';

InputHex.addEventListener('input', function () {
    exampleBlock.style.BoxShadowColor = InputHex.value;
})
})
}