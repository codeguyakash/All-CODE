let sum = function(a,b)
{
    let total = a + b ;
    return total;
}

console.log(sum(5,4));

let sum2 = (a,b)=>
{
    let total = a + b ;
    return total;
}
console.log(sum2(15,20));

let sum3 = (a,b) => a+b;
console.log(sum3(3,8));
// -----------------------------------------------------------------
let square = function(a)
{
    return a*a;
}
console.log(square(5));

let square2 = (a) => a*a;
let square3 = a => a*a;



// -----------------------------------------------------------------
let printMessage = function()
{
    console.log("hello this is function");
}

let printMessage2 = () => console.log("hello nidhi")
printMessage2();

let printMessage3 = () =>
{
    console.log("Hello NBC");
    console.log("Hello NBC");
    console.log("Hello NBC");
}
printMessage3();

// -----------------------------------------------------------------
let OB = {
    "firstName" : "akash",
    "lastName" : "Atheist",
    "getFullName":function(){
        console.log(this.firstName+" "+ this.lastName);
    },
    "getArrowFullName":()=> //this is the arrow function 
    {
        console.log(this.firstName+" "+ this.lastName);
    }
}

OB.getFullName();
OB.getArrowFullName();