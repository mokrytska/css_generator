function initFlexBox() {
    let inputDisplayFlex = document.querySelector('.generator__item--flex-box .generator__input--display-flex');
    console.log(inputDisplayFlex);
    let inputFlexDirection = document.querySelector('.generator__item--flex-box .generator__input--flex-direction');
    console.log(inputFlexDirection);
    let inputFlexWrap = document.querySelector('.generator__item--flex-box .generator__input--flex-wrap');
    let inputFlexJustify = document.querySelector('.generator__item--flex-box .generator__input--flex-justify');
    let inputAlineItems = document.querySelector('.generator__item--flex-box .generator__input--flex-aline-items');
    let inputAlineContent = document.querySelector('.generator__item--flex-box .generator__input--flex-aline-content');
    let exampleBlock = document.querySelector('.generated-block-main');
    let textCopy = document.querySelector('.generator__item--flex-box .generator__styles');

      
    
    inputDisplayFlex.addEventListener('input', function(){
        if (inputDisplayFlex.value === 'Flex') {
            exampleBlock.style.displayFlex = 'flex';
        }
        else {
            exampleBlock.style.displayFlex = 'inlineFlex';
        }
        generateStyles();
    })
    inputFlexDirection.addEventListener('input', function() {
        if (inputFlexDirection.value === 'Row') {
            exampleBlock.style.flexDirection = 'row';
        }

        if (inputFlexDirection.value === 'Row reverse') {
            exampleBlock.style.flexDirection = 'row-reverse';
        }
        if (inputFlexDirection.value === 'Column') {
            exampleBlock.style.flexDirection = 'column';
        }

        if (inputFlexDirection.value === 'Column Reverse') {
            exampleBlock.style.flexDirection = 'column-reverse';
        }
        generateStyles();
    })

    inputFlexWrap.addEventListener('input', function() {
        if (inputFlexWrap.value === 'Wrap') {
            exampleBlock.style.flexWrap = 'wrap';
        }
        if (inputFlexWrap.value === 'No Wrap') {
            exampleBlock.style.flexWrap = 'nowrap';
        }
        if (inputFlexWrap.value === 'Wrap Reverse') {
            exampleBlock.style.flexWrap = 'wrap-reverse';
        }
        generateStyles();
    })

    inputFlexJustify.addEventListener('input', function() {
        if (inputFlexJustify.value === 'Flex Start') {
            exampleBlock.style.justifyContent = 'flex-start';
        }
        if (inputFlexJustify.value === 'Flex End') {
            exampleBlock.style.justifyContent = 'flex-end';
        }
        if (inputFlexJustify.value === 'Center') {
            exampleBlock.style.justifyContent = 'center';
        }
        if (inputFlexJustify.value === 'Space Between') {
            exampleBlock.style.justifyContent = 'space-between';
        }
        if (inputFlexJustify.value === 'Space Around') {
            exampleBlock.style.justifyContent = 'space-around';
        }
        generateStyles();
    })

    inputAlineItems.addEventListener('input', function() {
        if (inputAlineItems.value === 'Flex Start') {
            exampleBlock.style.alignItems = 'flex-start';
        }
        if (inputAlineItems.value === 'Flex End') {
            exampleBlock.style.alignItems = 'flex-end';
        }
        if (inputAlineItems.value === 'Center') {
            exampleBlock.style.alignItems = 'center';
        }
        if (inputAlineItems.value === 'Baseline') {
            exampleBlock.style.alignItems = 'baseline';
        }
        if (inputAlineItems.value === 'Stretch') {
            exampleBlock.style.alignItems = 'stretch';
        }
        generateStyles();
    })

    inputAlineContent.addEventListener('input', function() {
        if (inputAlineContent.value === 'Flex Start') {
            exampleBlock.style.alignContent = 'flex-start';
        }
        if (inputAlineContent.value === 'Flex End') {
            exampleBlock.style.alignContent = 'flex-end';
        }
        if (inputAlineContent.value === 'Center') {
            exampleBlock.style.alignContent = 'center';
        }
        if (inputAlineContent.value === 'Space Between') {
            exampleBlock.style.alignContent = 'space-between';
        }
        if (inputAlineContent.value === 'Space Around') {
            exampleBlock.style.alignContent = 'space-around';
        }
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
generateStyles() ;

}