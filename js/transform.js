function initTransform() {
    let inputScale = document.querySelector('.generator__item--transform .generator__input--scale');
    console.log(inputScale);
    let inputRotate = document.querySelector('.generator__item--transform .generator__input--rotate');
    let inputTranslateX = document.querySelector('.generator__item--transform .generator__input--translate_x');
    let inputTranslateY = document.querySelector('.generator__item--transform .generator__input--translate_y');
    let inputSkewX = document.querySelector('.generator__item--transform .generator__input--skew_x');
    let inputSkewY = document.querySelector('.generator__item--transform .generator__input--skew_y');
    let exampleBlock = document.querySelector('.generator__item--transform .generated-block');
    console.log(exampleBlock);


    inputScale.addEventListener('input', setstyle);
    inputRotate.addEventListener('input', setstyle);
    inputTranslateX.addEventListener('input', setstyle);
    inputTranslateY.addEventListener('input', setstyle);
    inputSkewX.addEventListener('input', setstyle);
    inputSkewY.addEventListener('input', setstyle);




    
function setstyle() {
    let styleValue = ` 
    scale( ${inputScale.value}) 
    rotate(${inputRotate.value}deg)
    translateX(${inputTranslateX.value}px)
    translateY(${inputTranslateY.value}px)
    skewX(${inputSkewX.value}deg)
    skewY(${inputSkewY.value}deg)
    `
    console.log(styleValue.value);
    exampleBlock.style.transform = styleValue;
}
}
