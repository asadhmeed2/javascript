let conatiner = document.querySelector('.container');
let body = document.querySelector('*');
let form = document.querySelector('.form')
let input =document.querySelectorAll("input");

const initContainer = () => {
    
    conatiner.style.width= "100 %";
    conatiner.style.height= "100vh";
    conatiner.style.display= "flex";
    conatiner.style.flexDirection= "column";
    conatiner.style.justifyContent= "center";
    conatiner.style.alignItems="center";
}

const bodyStyle = () => {
    body.style.background = 'rgb(146, 156, 111)';
    body.style.padding = "0px";
    body.style.margin = "0px";
    body.style.boxSizing = "border-box";
    body.style.fontFamily = `"Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans - serif`;
    }

    const  initForm=()=> {
    form.style.display= "flex";
    form.style.flexDirection= "column";
    form.style.padding= "10px";
    form.style.background= "cadetblue";
    form.style.borderRadius= "15px";
}
const initInput =()=> {
    input = Array.from(input).forEach(e=>{
        e.style.margin = "10px 0";
    })
    
}





initForm();
bodyStyle();
initContainer();
initInput();