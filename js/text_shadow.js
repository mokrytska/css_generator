function initTextShadow() {
    let inputHorLength = document.querySelector('.generator__item--textshadow .generator__input--horisontal-length');
    let inputVertLength = document.querySelector('.generator__item--textshadow .generator__input--vertical-length');
    console.log(inputVertLength.value);
    let inputBlurRadius = document.querySelector('.generator__item--textshadow .generator__input--Blur-radius');
    console.log(inputBlurRadius.value);
    let inputHex = document.querySelector('.generator__item--textshadow .generator__input--Hex');
    let exampleText = document.querySelector('.generator__item--textshadow .generated-text');
    
    inputHorLength.addEventListener('input',setstyle);
    inputVertLength.addEventListener('input',setstyle);
    inputBlurRadius.addEventListener('input',setstyle);
    inputHex.addEventListener('input',setstyle);
    
    
    
    
    function setstyle () {
        let styleValue = `
            ${inputHorLength.value}px
            ${inputVertLength.value}px
            ${inputBlurRadius.value}px
            ${inputHex.value} 
        `;
        exampleText.style.textShadow = styleValue;   
    }
}