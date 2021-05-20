function initBoxShadow() {
    let exampleBlock = document.querySelector('.generator__item--boxshadow');
    let inputInset = document.querySelector('.generator__input--insert');
    let InputHorLength = document.querySelector('.generator__input--horisontal-length');
    let InputVertLength = document.querySelector('.generator__input--vertical-length');
    let InputBlurRadius = document.querySelector('.generator__input--Blur-radius');
    let InputSpread = document.querySelector('.generator__input--spread');
    let InputHex = document.querySelector('.generator__input--Hex');
    let colorSelector = document.querySelector('.generator__input--colorType');
    let hexBlock = document.querySelector('.generator__item--boxshadow .Hex');
    let rgbaBlock = document.querySelector('.generator__item--boxshadow .RGBA');

    let inputR = document.querySelector('.generator__input--R');
    let inputG = document.querySelector('.generator__input--G');
    let inputB = document.querySelector('.generator__input--B');
    let inputA = document.querySelector('.generator__input--A');

    let isHEXShown = true;
    let textCopy = document.querySelector('.generator__item--boxshadow .generator__styles');

    inputInset.addEventListener('input', setStyle)
    InputHorLength.addEventListener('input', setStyle)
    InputVertLength.addEventListener('input', setStyle)
    InputBlurRadius.addEventListener('input', setStyle)
    InputSpread.addEventListener('input', setStyle)
    InputHex.addEventListener('input', setStyle)
    inputR.addEventListener('input', setStyle)
    inputG.addEventListener('input', setStyle)
    inputB.addEventListener('input', setStyle)
    inputA.addEventListener('input', setStyle)

    colorSelector.addEventListener('input', function () {
        const value = colorSelector.value;

        if (value === 'HexColor') {
            isHEXShown = true;
            hexBlock.style.display = 'block';
            rgbaBlock.style.display = 'none';
        } else {
            isHEXShown = false;
            hexBlock.style.display = 'none';
            rgbaBlock.style.display = 'block';
        }
    });

    function setStyle() {
        let color = '';

        if (isHEXShown) {
            color = InputHex.value;
        } else {
            color = `rgba(${inputR.value},${inputG.value},${inputB.value},${inputA.value})`;
        }

        let styleValue = `
            ${inputInset.value}
            ${InputHorLength.value}px 
            ${InputVertLength.value}px
            ${InputBlurRadius.value}px
            ${InputSpread.value}px
            ${color}
        `;
        exampleBlock.style.boxShadow = styleValue;

        let stylesString = `
            box-shadow: ${styleValue};
        `

        console.log(stylesString)

    }

    function generateStyles() {
        textCopy.innerHTML = InputHorLength.value ;
    }

    generateStyles();
}