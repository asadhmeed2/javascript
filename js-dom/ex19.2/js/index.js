const form = document.querySelector('[name="verify"]');
const inputs = document.querySelectorAll('.input')

console.log(form);
const checkInputLength = (length) => length > 1 && length <= 6;

const checkIfItsNumber = (char) => Number(char) ? true : false;


const setInputMaxLength = () => {
    inputs.forEach(e => e.setAttribute(`maxlength`, "1"))
}


const checkInputAndMoveToNaxtSibling = (e) => {
    let input = e.target;

    console.log("in input event");



    if (!input.nextElementSibling && input.value) {
        e.target.value = e.target.value ;

    } else
        if (input.nextElementSibling && input.value) {
            if (input.value >= 0 && input.value <= 9) {
                e = input.nextElementSibling.focus();
            } else {

                e.target.value = Number(e.target.value) ? e.target.value[0] : '';
            }
        } else if (input.previousElementSibling && !input.value) {
            e = input.previousElementSibling.focus();
        }

}


const handlePaste = (e) => {

    
    const paste = e.clipboardData.getData('text');
    

    inputs.forEach((input, i) => input.value = paste[i] >= 0 && paste[i] <= 9 ? paste[i] : "");


}



setInputMaxLength();
form.addEventListener('input', e => {
    checkInputAndMoveToNaxtSibling(e);
});
inputs[0].addEventListener('paste', e => {

    handlePaste(e)

}
)

