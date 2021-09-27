const continer = document.querySelector('.continer')


const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];
const creatOrderdListOfNames = () => {
    let listString = '';

    listString += `<ol style ="list-style-type:none">`
    users.forEach(e => {
        listString += `<li data-id="${e.id}">${e.firstName} ${e.lastName}</li>`
    })
    listString += '</ol>'
    return listString;
}

continer.innerHTML = creatOrderdListOfNames();