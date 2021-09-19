let swap=(object)=>{
    let newObject={}
for (const key in object) {
    if (object.hasOwnProperty( key)) {
        newObject[object[""+key]] = ''+key;
        
    }
} 



return newObject;
}

const object ={
    name:'asad',
    age:30
}
console.log(object);
console.log(swap(object));