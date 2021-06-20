function initFlexBox() {
    let inputDisplayFlex = document.querySelector('.generator__item--flex-box .generator__input--display-flex');
    console.log(inputDisplayFlex);
    let inputFlexDirection = document.querySelector('.generator__item--flex-box .generator__input--flex-direction');
    console.log(inputFlexDirection);
    let inputFlexWrap = document.querySelector('.generator__item--flex-box .generator__input--flex-wrap');
    let inputFlexJustify = document.querySelector('.generator__item--flex-box .generator__input--flex-justify');
    let inputAlineItems = document.querySelector('.generator__item--flex-box generator__input--flex-aline-items');
    let inputAlineContent = document.querySelector('.generator__item--flex-box generator__input--flex-aline-content');
    let exampleBlock = document.querySelector('.generated-block-main');

    inputDisplayFlex.addEventListener('input', function(){
        if (inputDisplayFlex.value === 'Flex') {
            exampleBlock.style.displayFlex = 'flex';
        }
        else {
            exampleBlock.style.displayFlex = 'inleFlex';
        }
    })
    inputFlexDirection.addEventListener('input', function() {
        if (inputFlexDirection.value === 'Row') {
            exampleBlock.style.flexDirection = 'row';
        }

        if (inputFlexDirection.value === 'Row reverse') {
            exampleBlock.style.flexDirection = 'rowReverse';
        }
        if (inputFlexDirection.value === 'Column') {
            exampleBlock.style.flexDirection = 'column';
        }

        if (inputFlexDirection.value === 'Column reverse') {
            exampleBlock.style.flexDirection = 'columnReverse';
        }
    })

    inputFlexWrap.addEventListener('input', function() {
        if (inputFlexWrap.value === 'Wrap') {
            exampleBlock.style.flexWrap = 'wrap';
        }
        if (inputFlexWrap.value === 'No Wrap') {
            exampleBlock.style.flexWrap = 'nowrap';
        }
        if (inputFlexWrap.value === 'Wrap Reverse') {
            exampleBlock.style.flexWrap = 'wrapReverse';
        }
    })

    inputFlexJustify.addEventListener('input', function() {
        if (inputFlexJustify.value === 'Flex Start') {
            exampleBlock.style.justifyContent = 'flexStart';
        }
        if (inputFlexJustify.value === 'Flex End') {
            exampleBlock.style.justifyContent = 'flexEnd';
        }
        if (inputFlexJustify.value === 'Center') {
            exampleBlock.style.justifyContent = 'center';
        }
        if (inputFlexJustify.value === 'Space Between') {
            exampleBlock.style.justifyContent = 'spaceBetween';
        }
        if (inputFlexJustify.value === 'Space Around') {
            exampleBlock.style.justifyContent = 'spaceAround';
        }
    })

    inputAlineItems.addEventListener('input', function() {
        if (inputAlineItems.value === 'Flex Start') {
            exampleBlock.style.alignItems = 'flexStart';
        }
        if (inputAlineItems.value === 'Flex End') {
            exampleBlock.style.alignItems = 'flexEnd';
        }
        if (inputAlineItems.value === 'Center') {
            exampleBlock.style.alignItems = 'center';
        }
        if (inputAlineItems.value === 'Baseline') {
            exampleBlock.style.alignItems = 'baseline';
        }
        if (inputAlineItems.value === 'Stretched') {
            exampleBlock.style.alignItems = 'stretched';
        }
    })

    inputAlineContent.addEventListener('input', function() {
        if (inputAlineContent.value === 'Flex Start') {
            exampleBlock.style.alignContent = 'flexStart';
        }
        if (inputAlineContent.value === 'Flex End') {
            exampleBlock.style.alignContent = 'flexEnd';
        }
        if (inputAlineContent.value === 'Center') {
            exampleBlock.style.alignContent = 'center';
        }
        if (inputAlineContent.value === 'Space Between') {
            exampleBlock.style.alignContent = 'spaceBetween';
        }
        if (inputAlineContent.value === 'Space Around') {
            exampleBlock.style.alignContent = 'spaceAround';
        }
    })

}