function initRGBA() {
    let inputR = document.querySelector('.generator__item--RGBA .generator__input--R');
    let inputG = document.querySelector('.generator__item--RGBA .generator__input--G');
    let inputB = document.querySelector('.generator__item--RGBA .generator__input--B');
    let inputOpacity = document.querySelector('.generator__item--RGBA .generator__input--Opacity'); 
    let exampleBlock = document.querySelector('.generator__item--RGBA .generated-text');

    inputR.addEventListener('input',setstyle);
    inputG.addEventListener('input',setstyle);
    inputB.addEventListener('input',setstyle);
    inputOpacity.addEventListener('input',setstyle);
    
    function setstyle() {
        let stylesValue = `rgba( ${inputR.value},${inputG.value},${inputB.value},${inputOpacity.value})`;
       
        
      exampleBlock.style.backgroundColor = stylesValue; 

        
    }

}
