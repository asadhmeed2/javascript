const book1={
     name: "book1"
     , author:"abeed"
     , year: 1990
}
const book2 = {
    name: "book2"
    , author: "mohsin"
    , year: 2000
}
let bookUtils={
    getFirstPublished: function(book1,book2){
        return ((book1.year>book2.year)? book1.year : book2.year);
    },
    setNewEdition:(book ,newEditionYear)=> {
        book.year=newEditionYear;
    }
    ,
    setLanguage: (book,language)=>{
        book.language=language;
    }
    ,
    setTranslation: (book,language, translator)=>{
        book.translation={language:language,
            translator:translator
        };
    }
    ,
    setPublisher: (book,name,location)=>{
            book.publisher={
                name:name,
                location:location
            }
    },

    isSamePublisher:(book1,book2)=>
    {
        if (book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location){
            return true;

        }
        return false;
    }
}