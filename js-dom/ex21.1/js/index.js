const btn = document.querySelector('#check-btn')
const age = document.querySelector('#age')
const message = document.querySelector('.message')


const chekAge = (age) => age < 18;

const onclick = (e) => {
    message.innerHTML = chekAge(age.value) ? `<span class="red"> you’re too young</span>` : `<span class="green"> you can drink appear<span class="red"> but its not halthy</span></span>`;
}

btn.addEventListener('click', onclick)




