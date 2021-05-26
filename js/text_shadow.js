function initTextShadow() {
    let inputHorLength = document.querySelector('.generator__item--textshadow .generator__input--horisontal-length');
    let inputVertLength = document.querySelector('.generator__item--textshadow .generator__input--vertical-length');
    let inputBlurRadius = document.querySelector('.generator__item--textshadow .generator__input--Blur-radius');
    let inputHex = document.querySelector('.generator__item--textshadow .generator__input--Hex');
    let exampleText = document.querySelector('.generator__item--textshadow .generated-text');
    let textCopy = document.querySelector('.generator__item--textshadow .generator__styles');

    inputHorLength.addEventListener('input', setstyle);
    inputVertLength.addEventListener('input', setstyle);
    inputBlurRadius.addEventListener('input', setstyle);
    inputHex.addEventListener('input', setstyle);

    function setstyle() {
        let styleValue = `
            ${inputHorLength.value}px
            ${inputVertLength.value}px
            ${inputBlurRadius.value}px
            ${inputHex.value} 
        `;
        exampleText.style.textShadow = styleValue;
        generateStyles ();
    }

    function generateStyles () {
        textCopy.innerHTML = `
        text-shadow:
        ${inputHorLength.value}px
        ${inputVertLength.value}px
        ${inputBlurRadius.value}px
        ${inputHex.value} 
    `;
    }
    generateStyles ();

}