function initFlexBox() {
    let inputDisplayFlex = document.querySelector('.generator__item--flex-box .generator__input--display-flex');
    let inputFlexDirection = document.querySelector('.generator__item--flex-box .generator__input--flex-direction');
    let inputFlexWrap = document.querySelector('.generator__item--flex-box .generator__input--flex-wrap');
    let inputFlexJustify = document.querySelector('.generator__item--flex-box .generator__input--flex-justify');
    let inputAlineItems = document.querySelector('.generator__item--flex-box .generator__input--flex-aline-items');
    let inputAlineContent = document.querySelector('.generator__item--flex-box .generator__input--flex-aline-content');
    let exampleBlock = document.querySelector('.generated-block-main');
    let textCopy = document.querySelector('.generator__item--flex-box .generator__styles');



    inputDisplayFlex.addEventListener('input', function () {
        setStyles();
    })

    inputFlexDirection.addEventListener('input', function () {
        setStyles();
    })

    inputFlexWrap.addEventListener('input', function () {
        setStyles();
    })

    inputFlexJustify.addEventListener('input', function () {
        setStyles();
    })

    inputAlineItems.addEventListener('input', function () {
        setStyles();
    })

    inputAlineContent.addEventListener('input', function () {
        setStyles();
    })

    function setDisplayFlex() {
        exampleBlock.style.display = 'flex';
        exampleBlock.style.displayFlex = inputDisplayFlex.value;
        exampleBlock.style.flexDirection = inputFlexDirection.value;
        exampleBlock.style.flexWrap = inputFlexWrap.value;
        exampleBlock.style.justifyContent = inputFlexJustify.value;
        exampleBlock.style.alignItems = inputAlineItems.value;
        exampleBlock.style.alignContent = inputAlineContent.value;
    }
    setStyles();

    function generateStyles() {
        textCopy.innerHTML = `
    .flexbox-container {
        display: ${inputDisplayFlex.value}; <br>
        flex-direction:${inputFlexDirection.value};<br>
        flex-wrap: ${inputFlexWrap.value};<br>
        justify-content: ${inputFlexJustify.value};<br>
        align-items: ${inputAlineItems.value};<br>
        align-content: ${inputAlineContent.value};
      }
    `
    }
    setStyles();

    function setStyles() {
        setDisplayFlex();
        generateStyles();
    }


}