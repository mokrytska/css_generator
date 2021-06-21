function initTransition() {
    let inputProperty = document.querySelector('.generator__item--transition .generator__input--property');
    let inputDuration = document.querySelector('.generator__item--transition .generator__input--duration');
    let inputFunction = document.querySelector('.generator__item--transition .generator__input--function');
    let exampleBlock = document.querySelector('.generator__item--transition .generated-block');
    let textCopy = document.querySelector('.generator__item--transition .generator__styles');

    inputProperty.addEventListener('input', function () {
        if (inputProperty.value === 'Background') {
            exampleBlock.style.background = 'green';
        }
        if (inputProperty.value === 'Color') {
            exampleBlock.style.color = 'red';
        }
        if (inputProperty.value === 'Height') {
            exampleBlock.style.height = '150px';
        }
        if (inputProperty.value === 'Width') {
            exampleBlock.style.width = '250px';
        }
        if (inputProperty.value === 'Outline') {
            exampleBlock.style.outline = '5px solid pink';
        }
        

    })

    inputDuration.addEventListener('input', function () {
        exampleBlock.style.transitionDuration = inputDuration.value + 's';
    })
    inputFunction.addEventListener('input', function() {
        if (inputFunction.value === 'Ease') {
            exampleBlock.style.transitionTimingFunction = 'ease';
        }
        if (inputFunction.value === 'Liner') {
            exampleBlock.style.transitionTimingFunction = 'linear';
        }
        if (inputFunction.value === 'Ease-In') {
            exampleBlock.style.transitionTimingFunction = 'ease-in';
        }
        if (inputFunction.value === 'Ease-Out') {
            exampleBlock.style.transitionTimingFunction = 'ease-out';
        }
        if (inputFunction.value === 'Ease-In-Out') {
            exampleBlock.style.transitionTimingFunction = 'ease-in-out';
        }
        
    })


}

// transition-property: all;
// transition-duration: 4s;
// transition-timing-function: ease-in;