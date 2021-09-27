let yourName =document.querySelector('#name')
let email =document.querySelector('#email')
let age =document.querySelector('#age')
let submit =document.querySelector('#submit')
let message =document.querySelector('.message-box')

 
const openDataVerification=()=>{
    message.innerHTML="";
    message.innerHTML += `<div> name : <span class='full-name'>${yourName.value}</span></div>`;
    message.innerHTML += `<div>age : <span  class='age'>${age.value}</span></div>`;
    message.innerHTML += ` <div>email : <span class='email'>${email.value}</span></div>`;
    message.innerHTML+=`<input type="button" class='cancel-btn' value="cancel">`;
    message.innerHTML +=`<input type="submit" class='submit-btn' value="submit">`;
    
}






submit.addEventListener('click', e=>{
    e.preventDefault();    
    openDataVerification();
    let submit = document.querySelector('.submit-btn');
    let cancel = document.querySelector('.cancel-btn');


    submit.addEventListener('click', () =>{
        message.innerHTML ='congratulations you successfully sent this form'
    
    } )
    cancel.addEventListener('click', () => message.innerHTML ='')

});