const people = ["Greg", "Mary", "Devon", "James"];

people.forEach(name => {
    console.log('the name is : ', name);
});

people.shift();
people.pop();
people.unshift("Matt");
people.push("Asad");



for (let i = 0; i < people.length; i++) {
    console.log("in for loop : ", people[i]);
    if (people[i] === "Mary") {
        break;
    }
}



let newPeople = people.slice(2);
console.log(newPeople);

console.log("Mary located in index", people.indexOf('Mary'));
console.log("foo located in index", people.indexOf('foo'));


people.splice(0, people.length, "Greg", "Mary", "Devon", "James");
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);


let withBob = people + " Bob";
console.log(withBob);