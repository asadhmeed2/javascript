const book={
    arthur:"asad",
    releasYear:1990,
    titele:"my life",
    numberOfPages:1
}

let bookDescription =(book)=>{
    return `The book ${book.titele} was written by ${book.arthur} in 
the year ${book.releasYear}`
}

console.log(bookDescription(book));