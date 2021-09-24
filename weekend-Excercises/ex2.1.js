const sumOfSmallestTwoNum = (array) => {
    let smallest = array[0] < array[1] ? array[0] : array[1];
    let secondSmallest = array[0] < array[1] ? array[1] : array[0];

    for (let i = 2; i < array.length; i++) {
        if(array[i]<smallest){
            secondSmallest=smallest;
            smallest=array[i];
        }else if(array[i]<secondSmallest){
            secondSmallest=array[i];
        }
    }
    return smallest+secondSmallest;

}


console.log(sumOfSmallestTwoNum([10, 343445353, 3453445, 3453545353453]));