const toCamelCase =(string)=>{
    let array = string.split(/-|_/g);
    
    for (let i=0;i<array.length;i++) {
        if (i!==0) {
            array[i] = array[i].replace(array[i][0], array[i][0].toUpperCase())
        }
        
    }
    return array.join('');
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("the_stealth-warrior"));
console.log(toCamelCase("the_stealth_warrior"));