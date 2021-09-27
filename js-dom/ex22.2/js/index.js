const img = document.querySelector('#img');
const checkBox =document.querySelector('#check');





checkBox.addEventListener('change', function () {
    if (this.checked) {
        
        img.style.visibility = "visible";
    } else {
       
        img.style.visibility = 'hidden'
    }
});