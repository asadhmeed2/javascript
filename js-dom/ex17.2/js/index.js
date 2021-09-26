const textArea1 = document.querySelector('#textArea1');
const submit = document.querySelector('#submit-btn');
const textWorning = document.querySelector('#worning');


const textAreaCheck =()=>{
    console.log(textArea1.value);
    if (textArea1.value.length <100) {
        
        textWorning.innerHTML ='worning enter at least 100 characters '
        textWorning.style.color ='red';
        
    }else {
        
        textWorning.innerHTML = ""
    }
}


submit.addEventListener('click',(e)=>{
    textAreaCheck();
 
    e.preventDefault()
})
textArea1.addEventListener('keyup', (event)=>textAreaCheck());
// textArea1.addEventListener('focus',()=>textAreaCheck());






