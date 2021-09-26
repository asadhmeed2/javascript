let submit = document.querySelector('#submit-btn');
let numOfTimesInput = document.querySelector('#num-of-smileys')
let imgsScreen = document.querySelector('.img-screen');

console.log(imgsScreen.innerHTML);


const showImages = () => {
    console.log(numOfTimesInput.value);
    imgsScreen.innerHTML = "";
    
    if (Number(numOfTimesInput.value) > 0) {
        imgsScreen.innerHTML += `<img src="./img/smiley-559124_1280.png" alt="smile">`.repeat(Number(numOfTimesInput.value));
        console.log(imgsScreen.innerHTML);
    }

}


submit.addEventListener('click', () => showImages())

