var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);


// the output of the code well be nothing but the value of the result variable 
// well be 5
// becuse someFunction tackes number without doing anything with it and returns 
// new function otherFunction as a return value then the code initialize the 
// result variable and call the otherFunction thats returns the value of b 
// variable wich is 5 


var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a);

//the code well log to the console the number 1
//becuse the code well call the function b2 witch initialize function a witch 
// well tack value of 10 and the function b2 well return nothing
// and then the program well log the value of the variable a witch has the value 
// of 1







let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}

// the program output is 3 3 3 
// becuse the i is a global variable and when the program runs the for loop 
// in every itration the program calls the setTimeout function with the funcion 
// log and the value of i but becuse the variable i is a global variable and the 
// for loop wont stop and the value of i is increasing and its changing the value 
// in the log function and in the end it well log 3 three tims
