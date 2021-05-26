function initMultipleColumns () {
    let numColumns = document.querySelector('.generator__input--numcolumns');
    let gaps = document.querySelector('.generator__input--gap');
    let textcols = document.querySelector('.textcols');
    let textCopy = document.querySelector('.generator__item--multcolunms .generator__styles')

    numColumns.addEventListener('input', function () {
        textcols.style.columnCount = numColumns.value; 
        generateStyles ()
    })
    
    gaps.addEventListener('input', function () {
        textcols.style.columnGap = gaps.value + 'px';
        generateStyles ()
    })
    function generateStyles () {
        textCopy.innerHTML = `
        -moz-column-count:
            ${numColumns.value}<br>
        -moz-column-gap:
            ${gaps.value}px<br>
        -webkit-column-count: 
        ${numColumns.value}<br>
            -webkit-column-gap:
            ${gaps.value}px<br>
            column-count: ${numColumns.value}<br>
            column-gap:  ${gaps.value}px<br>
    `;
    }
    generateStyles();
}







