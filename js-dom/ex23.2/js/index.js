const span = document.querySelector('#span');
const start = document.querySelector('#start');
const cancel = document.querySelector('#stop');
const pouse = document.querySelector('#pouse');
span.textContent=`00:00:00`
let s = 0
let m = 0;
let h = 0;
let intervalId=0;

function time(startOrstop) {
   
    s++;
    if(s===60){
        s=0
        m++;
    }
    if(m===60){
        h+=1;
        m=0;
    }
    span.textContent =
        ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
       
   
   
}
start.addEventListener('click',(e=>{
 
    
       
   intervalId= setInterval(() => time(), 1000);
        console.log(time);
  
}))
cancel.addEventListener('click',(e=>{
   
    clearInterval(intervalId)
    span.textContent = `00:00:00`;
    s=0;
    m=0;
    h=0;
    
}))
pouse.addEventListener('click', (e => {

    clearInterval(intervalId)
    
}))
