// 1st filter Method--------------------------
const isEven = (Number) => {
    return Number %2 ==0;
}

let array = [1,2,3,4,5];

let array2 = array.filter(isEven)
console.log(array2);

let array3 = array.filter((Number) => {
    return Number %2 ==0;
});
console.log(array3);

let array4 = array.filter(Number => Number %2 ==0);
console.log(array4)

// 2nd forEach Method--------------------------
let arr = [1,2,3,4,5];

arr.forEach(number =>{
    console.log(number);
});

// 3rd Map Method--------------------------
let arr2 = arr.map(number =>{
    return number * number;
});
console.log(arr2);
// 4th find Method--------------------------

console.log(arr.find(x=>x ==4));



// 5th findIndex Method--------------------------
console.log(arr.findIndex(x=>x==4));




// ---------------------------------------------------
function Person(fname, lname, age){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
}

let persons = [
    new Person("Suraj","Jai Bhim",19),
    new Person("Ritik","Jai Bhim",21),
    new Person("Ravi","Jai Bhim",15)
];
console.log(persons.filter(x=>x.age>18));

let persons2 = persons.map(x=>{
return new Person(
    x.firstName.toUpperCase(),
    x.lastName.toUpperCase(),
    x.age
);
});
console.log(persons2);