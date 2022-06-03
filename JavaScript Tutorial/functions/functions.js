let m = 15;
let n = 14;

let total = add(m, n);
console.log(total)

total = add(20, 30); // arguments
console.log(total);


// function declaration
function add(m,n) // perameters
{
    let add = m + n;
    // console.log(add);
    return add;
}

// function expression
const avg = function(m,n){
    return (m + n) / 2;
};

let y = avg(5,6)
console.log(y);

function print(a,b)
{
    console.log(arguments);
    console.log(a);
    console.log(b);
    return a + " " + b ;
}

console.log(print(3,9,8,6));


function sum(){
    let total = 0;
    for(let i=0; i< arguments.length; i++){
        total = total + arguments[i];
    }
    console.log(total);
}

sum(6,5);
sum(1,2,3,4,5);

default
function printMessage(count = 1){
    for (let index = 0; index < count; index++){
        console.log(`Hello ${index}`);
    }
}

// printMessage(50);

function avg(a,b){
    let value = (a+b)/2;
    return value;
}

avg(60,40);
console.log(avg);