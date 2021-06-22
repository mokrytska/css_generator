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
        setDisplayFlex()
        generateStyles();
    })

    inputFlexDirection.addEventListener('input', function () {
        setDisplayFlex()
        generateStyles();
    })

    inputFlexWrap.addEventListener('input', function () {
        setDisplayFlex()
        generateStyles();
    })

    inputFlexJustify.addEventListener('input', function () {
        setDisplayFlex()
        generateStyles();
    })

    inputAlineItems.addEventListener('input', function () {
        setDisplayFlex()
        generateStyles();
    })

    inputAlineContent.addEventListener('input', function () {
        setDisplayFlex()
        generateStyles();
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
    setDisplayFlex();

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
    generateStyles();

}