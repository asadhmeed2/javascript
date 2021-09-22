function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();

//the function logs to the console the the value of variable a and then logs the 
// returned value of the function foo by calling it from withen the console.log 
//and then initialize the variable a and the function foo witch meen that the
//output of the logs well be undefined 2

// we cne fix the undefined value of a by initialize a befor the console.log(a)




var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

//the program logs Colin Ihrig witch is the fullName of the prop in the obj 
// object log  undefined

// we can fix the the bug with change in line 32 obj.prop.getFullName to obj.prop.
// getFullName() and in line 33 test() to test


function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);


// the code logs undefined twice to the console
//we can fix the bug by change the position of the logs into the funcB() scope

function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();


// the code output is :
// 2
// 2
// we can fix the bug by changing the name of the first function into different
// name and call the function with the new name

function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
console.log(e);

// the output of the code
// 1
// undefined
// we can fix the bug by removing the var in line 77 



function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

// the code output is 
//undefined
//1
//we can fix the bug with change the position of the second log to the line after the declaration of a




