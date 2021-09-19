
const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
    "hamburgers"];



    const counteTheLetter=(array)=>{
        const letters={}
        let string=array.join('');
        string.split('').forEach(letter => {//iterate on all the array and count the letters
            if(letters[letter.toLowerCase()]){//if the letter is a proporty in the object 
                letters[letter.toLowerCase()]+=1; // add 1 to the value of the proporty
            }else{
                letters[letter.toLowerCase()] = 1; // else add new proporty to the object and initialize it with value 1
            }
            
            
        });
        return letters;
    }
let newLetters = counteTheLetter(['asad', "hemeed"])
console.log(newLetters);





let maxLetter ='z';
let maxRepeted=0;
for (const key in newLetters) {
    
    if (newLetters.hasOwnProperty( key)) {
        if (newLetters[''+key] >maxRepeted) {
            maxLetter=''+key;
            maxRepeted=newLetters[''+key];
        }
        
    }
}
console.log(maxLetter);