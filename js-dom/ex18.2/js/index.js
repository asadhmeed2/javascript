let body = document.querySelector("body");
const start = () => {
    body.innerHTML += `<div class="container">
<h1>Contact Me</h1>
<form action="submit" class="form">
<label for="first-name">First Name:</label>
<input type="text" name="first-name" id="first-name">
<label for="last-name">Last Name:</label>
<input type="text" name="last-name" id="last-name">

<label for="email">Email:</label>
<input type="email" id="email" name="email">
<label for="textArea">Massage:</label>
<textarea name="textArea" id="" cols="30" rows="10"></textarea>
<input  type="submit" value="Send" id="submit">
</form>
</div>`}
start();
let conatiner = document.querySelector('.container');
let all = document.querySelector('*');
let form = document.querySelector('.form')
let input = Array.from (document.querySelectorAll("input"));
let btn = document.querySelector("#submit");
const initContainer = () => {

    conatiner.style.width = "100 %";
    conatiner.style.height = "100vh";
    conatiner.style.display = "flex";
    conatiner.style.flexDirection = "column";
    conatiner.style.justifyContent = "center";
    conatiner.style.alignItems = "center";
}

const bodyStyle = () => {
    all.style.background = 'rgb(146, 156, 111)';
    all.style.padding = "0px";
    all.style.margin = "0px";
    all.style.boxSizing = "border-box";
    all.style.fontFamily = `"Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans - serif`;
}

const initForm = () => {
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.padding = "10px";
    form.style.background = "cadetblue";
    form.style.borderRadius = "15px";
}
const initInput = () => {
     input.forEach(e => {
        e.style.margin = "10px 0";
    })
    
    
}

btn.addEventListener("click", (e) => {
e.preventDefault();
input.forEach(element => {
    console.log(element.value);
    });
});

bodyStyle();
initContainer();
initForm();
initInput();