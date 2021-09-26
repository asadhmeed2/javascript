const param = document.querySelector('#param');

const up = document.querySelector('#up');
const down = document.querySelector('#down');




let changeFontSize =(string)=>{
    if (!param.style.fontSize) {
        param.style.fontSize = "14px";
    }

    let numberInFontSize = Number(param.style.fontSize.replace(/\D+$/g, ''));
    if(string === 'down'){
        if (numberInFontSize > 6) {
            numberInFontSize--;
            param.style.fontSize = `${numberInFontSize}px`;
        }
    }
    if(string === 'up'){
        if (numberInFontSize < 100) {
            numberInFontSize++;
            param.style.fontSize = `${numberInFontSize}px`;
        }
    }
}


up.addEventListener('click',()=>changeFontSize('up'));

down.addEventListener('click',()=>changeFontSize("down"));