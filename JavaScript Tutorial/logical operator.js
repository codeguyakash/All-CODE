//Logical operators //
//  And Operatora both condition always true then output is always true
let knowsprogramming = true;
let marksabove70 = false;

let callforinterview = knowsprogramming && marksabove70;
console.log(callforinterview);

// or operator one condition always true then output is always true

callforinterview = marksabove70 || knowsprogramming;
console.log(callforinterview);

// not operators is changes into true to false and false to true
console.log(!true);
console.log(!false);

// short circuit 
let a = 10;
let b = 20;

console.log(a == 10 || ++b == 21);
console.log(a);
console.log(b); 

//ternory operators

// ternary operator (condition ? statement1 : statement2)

let num = 13;
console.log( num %2 ==0 ? "Even" : "Odd")




