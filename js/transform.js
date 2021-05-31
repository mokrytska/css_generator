function initTransform() {
    let inputScaleX = document.querySelector('.generator__item--transform .generator__input--scale_x');
    let inputScaleY = document.querySelector('.generator__item--transform .generator__input--scale_y');
    let inputRotateX = document.querySelector('.generator__item--transform .generator__input--rotate_x');
    let inputRotateY = document.querySelector('.generator__item--transform .generator__input--rotate_y');
    let inputRotateZ = document.querySelector('.generator__item--transform .generator__input--rotate_z');
    let inputTranslateX = document.querySelector('.generator__item--transform .generator__input--translate_x');
    let inputTranslateY = document.querySelector('.generator__item--transform .generator__input--translate_y');
    let inputTranslateZ = document.querySelector('.generator__item--transform .generator__input--translate_z');
    let inputSkewX = document.querySelector('.generator__item--transform .generator__input--skew_x');
    let inputSkewY = document.querySelector('.generator__item--transform .generator__input--skew_y');
    let exampleBlock = document.querySelector('.generator__item--transform .generated-block');
    let textCopy = document.querySelector('.generator__item--transform .generator__styles');
    let inputCheckbox = document.querySelector('.generator__item--transform .generatot__item--checkbox');
    let mainBlock = document.querySelector('.generator__item--transform');
    

    inputScaleX.addEventListener('input', setstyle);
    inputScaleY.addEventListener('input', setstyle);
    inputRotateX.addEventListener('input', setstyle);
    inputRotateY.addEventListener('input', setstyle);
    inputRotateZ.addEventListener('input', setstyle);
    inputTranslateX.addEventListener('input', setstyle);
    inputTranslateY.addEventListener('input', setstyle);
    inputTranslateZ.addEventListener('input', setstyle);
    inputSkewX.addEventListener('input', setstyle);
    inputSkewY.addEventListener('input', setstyle);


    function setstyle() {
        let styleValue = ` 
    scaleX(${inputScaleX.value})
    scaleY(${inputScaleY.value})
    rotateX(${inputRotateX.value}deg)
    rotateY(${inputRotateY.value}deg)
    rotateZ(${inputRotateZ.value}deg)
    translateX(${inputTranslateX.value}px)
    translateY(${inputTranslateY.value}px)
    translateZ(${inputTranslateZ.value}px)
    skewX(${inputSkewX.value}deg)
    skewY(${inputSkewY.value}deg)
    `
        console.log(styleValue);
        exampleBlock.style.transform = styleValue;
        generateStyles();
    }

    inputCheckbox.addEventListener('changed', function () {
        if (inputCheckbox.checked) {
            mainBlock.style.transform = 'perspective(400px)';
            
        }
    })

    function generateStyles() {
        textCopy.innerHTML = `
        -moz-transform:
        scaleX(${inputScaleX.value})
        scaleY(${inputScaleY.value}) 
        rotateX(${inputRotateX.value}deg)
        rotateY(${inputRotateY.value}deg)
        rotateZ(${inputRotateZ.value}deg)       
        translateX(${inputTranslateX.value}px)
        translateY(${inputTranslateY.value}px)
        translateZ(${inputTranslateZ.value}px)
        skewX(${inputSkewX.value}deg)
        skewY(${inputSkewY.value}deg)<br>
        -webkit-transform: scaleX(${inputScaleX.value})
        scaleY(${inputScaleY.value}) 
        rotateX(${inputRotateX.value}deg)
        rotateY(${inputRotateY.value}deg)
        rotateZ(${inputRotateZ.value}deg)
        translateX(${inputTranslateX.value}px)
        translateY(${inputTranslateY.value}px)
        translateZ(${inputTranslateZ.value}px)
        skewX(${inputSkewX.value}deg)
        skewY(${inputSkewY.value}deg);<br>
        -o-transform:scaleX(${inputScaleX.value})
        scaleY(${inputScaleY.value}) 
        rotateX(${inputRotateX.value}deg)
        rotateY(${inputRotateY.value}deg)
        rotateZ(${inputRotateZ.value}deg)
        translateX(${inputTranslateX.value}px)
        translateY(${inputTranslateY.value}px)
        translateZ(${inputTranslateZ.value}px)
        skewX(${inputSkewX.value}deg)
        skewY(${inputSkewY.value}deg) ;<br>
        -ms-transform: scaleX(${inputScaleX.value})
        scaleY(${inputScaleY.value}) 
        rotateX(${inputRotateX.value}deg)
        rotateY(${inputRotateY.value}deg)
        rotateZ(${inputRotateZ.value}deg)
        translateX(${inputTranslateX.value}px)
        translateY(${inputTranslateY.value}px)
        translateZ(${inputTranslateZ.value}px)
        skewX(${inputSkewX.value}deg)
        skewY(${inputSkewY.value}deg);<br>
        transform: scaleX(${inputScaleX.value})
        scaleY(${inputScaleY.value}) 
        rotateX(${inputRotateX.value}deg)
        rotateY(${inputRotateY.value}deg)
        rotateZ(${inputRotateZ.value}deg)
        translateX(${inputTranslateX.value}px)
        translateY(${inputTranslateY.value}px)
        translateZ(${inputTranslateZ.value}px)
        skewX(${inputSkewX.value}deg)
        skewY(${inputSkewY.value}deg)
    `;
    }
    generateStyles();
}