


const steps =(N)=>{
    // iterate over numbers between 0 to N-1 counting number of steps
for(let i=0;i<N;i++){
    let string = "'";//initialize the step string
    for(let j=0;j<N ;j++){
        if(j<=i){ 
            string=string+'#';
        }else{
            string= string+" ";
        }
    }
    string=string +"'";
    console.log(string);
}
}

steps(3);