const findTheDifferentNum =(array)=>{
    let different =0;
    let same =0;
    if(array[0] === array[1] && array[1] === array[2]){
        same=array[0];
        for (let i = 3; i < array.length; i++) {
            if(array[i] !== same){
                return array[i];
            }
            
        }
    }else{
        if(array[0] !== array[1] && array[0]!== array[2]){
            return array[0];
        }else
        if(array[2] !== array[1] && array[0]!== array[2]){
            return array[2];
        }else {
            return array[1];
        }
    }
}

console.log(findTheDifferentNum([1, 1, 1, 2, 1, 1]));
console.log(findTheDifferentNum([0, 0, 0.55, 0, 0]));