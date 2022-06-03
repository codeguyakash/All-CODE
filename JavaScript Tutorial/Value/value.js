// this is an example of the Value type 
let a = 15;
let b = a;
console.log(a,b);

b = 16;
console.log(a,b);


// this is the example of the reference Type

let person1 = {
    name : "Ritik"
};

let person2 = person1;

console.log(person1);
console.log(person1.name);
console.log(person2);
console.log(person2.name);


person2.age = 22;
console.log(person2);
console.log(person1);