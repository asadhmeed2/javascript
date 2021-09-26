let startLi = document.querySelector('.start-here');
let subTitleListUl = document.querySelector('#ul-sub');
let outerUl = document.querySelector('#outer-ul');
const title = document.querySelector('title');
const p = document.querySelector('p');
startLi.innerHTML = "main title";
subTitleListUl.innerHTML += `<li>sub title 4</li>`;

outerUl.removeChild(outerUl.lastElementChild);
title.innerHTML = 'Master Of The Dom';
p.innerHTML = 'Master Of The Dom';
