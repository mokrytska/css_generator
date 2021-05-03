function initBorderRadius () {
    let inputTopLeft = document.querySelector('.generator__item--bdrs .generator__input--top-left');
    let inputTopRight = document.querySelector('.generator__item--bdrs .generator__input--top-right');
    let inputBottomRight = document.querySelector('.generator__item--bdrs .generator__input--bottom-right')
    let inputBottomLeft = document.querySelector('.generator__item--bdrs .generator__input--bottom-left')
    let textCopy = document.querySelector('.generator__item--bdrs .generator__styles');
    let exampleBlock = document.querySelector('.generator__item--bdrs');

    inputTopLeft.addEventListener('input', function () {
        exampleBlock.style.borderTopLeftRadius = inputTopLeft.value + 'px';
        generateStyles ();
    })

    inputTopRight.addEventListener('input', function () {
        exampleBlock.style.borderTopRightRadius = inputTopRight.value + 'px';
        generateStyles ();
    })
    inputBottomRight.addEventListener('input', function () {
        exampleBlock.style.borderBottomRightRadius = inputBottomRight.value + 'px';
        generateStyles ();
    })
    inputBottomLeft.addEventListener('input', function () {
        exampleBlock.style.borderBottomLeftRadius = inputBottomLeft.value + 'px';
        generateStyles ();
    })


    function generateStyles () {
        // textCopy.innerHTML = '-webkit-border-radius: ' + inputTopLeft.value  + 'px ' + inputTopRight.value + 'px;<br>' + 
        // 'border-radius: ' + inputTopLeft.value  + 'px ' + inputTopRight.value + 'px;';

        textCopy.innerHTML = `
            -webkit-border-radius:
                ${inputTopLeft.value}px
                ${inputTopRight.value}px
                ${inputBottomRight.value}px
                ${inputBottomLeft.value}px;<br>
            border-radius:
                ${inputTopLeft.value}px
                ${inputTopRight.value}px
                ${inputBottomRight.value}px
                ${inputBottomLeft.value}px;
        `;
    }

    generateStyles ();

}
    

