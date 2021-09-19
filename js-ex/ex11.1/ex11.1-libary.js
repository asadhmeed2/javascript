var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];


const returnReadble = (library) => {
    let results = library.filter(e => e.readingStatus === true);
    results.forEach(el => {
        console.log(`book name is : ${el.title} by author ${el.author} and reading status is : ${el.readingStatus}`);
    });
}
returnReadble(library);