function initTransition() {
    let inputProperty = document.querySelector('.generator__item--transition .generator__input--property');
    let inputDuration = document.querySelector('.generator__item--transition .generator__input--duration');
    let inputFunction = document.querySelector('.generator__item--transition .generator__input--function');
    let exampleBlock = document.querySelector('.generator__item--transition .generated-block');
    let textCopy = document.querySelector('.generator__item--transition .generator__styles');

    inputProperty.addEventListener('input', function() {
        if (inputProperty.value === 'Background') {
            exampleBlock.style.background = 'green';
        }
    })

    inputDuration.addEventListener('input', function() {
        exampleBlock.style.transitinDiration = inputDuration.value + 'seconds';
    })


}

// transition-property: all;
// transition-duration: 4s;
// transition-timing-function: ease-in;