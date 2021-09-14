
const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
    "hamburgers"];



    const counteTheLetter=(array)=>{
        const letters={}
        let string=array.join('');
        string.split('').forEach(letter => {
            if(letters[letter]){
                letters[letter]+=1;
            }else{
                letters[letter] =1;
            }
            
        });
        return letters;
    }

console.log(counteTheLetter(['asad',"hmeed"]));