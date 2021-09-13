function isItdivisibleBy7(num){
if(num%7 == 0){
    return true;
}
return false;
}

function includes7(num){
    let strNum = num.toString();
   return strNum.includes('7');
}

function printBoom(n){
    let numArray=[];
    for (let i = 1; i <= n; i++) {
        if (isItdivisibleBy7(i) && includes7(i)){
           console.log("BOOM-BOOM : ",i);

        } else if (isItdivisibleBy7(i)){
            console.log("BOOM : ",i);

        }else{
            console.log(i);
        }
        
        
    }

}
printBoom(100);