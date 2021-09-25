const longest =(string1 ,string2)=>{
    let stringCharacterSet =new Set();
    let string = string1 + string2;
    
    for (const char of string) {
        stringCharacterSet.add(char)
    }
        return Array.from(stringCharacterSet).sort().join('');
}
console.log(longest("asad", 'hmmed'));


