// // 1.
// function Student(firstName,lastName,subject){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.subject = subject;
//     this.greet = function (){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// let Student1 = new Student("Akash","Athiest","Data and File Structures");
// // console.log(Student1);
// Student1.greet();

// // 2.
// function Employee(firstName,lastName,department){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.department = department;
//     this.greet = function (){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// let emp1 = new Employee("Suraj","Gupta","graphic designer");
// // console.log(emp1);
// emp1.greet();

// // ---------------------------------------------------------------

// //----Call Method----

// // 1.
// function Students(firstName,lastName,subject){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.subject = subject;
// }

// const greet = function (start , end){
//     console.log(`${start} ${this.firstName} ${this.lastName} ${end}`);
// }

// let Students1 = new Students("Ritik","Patil","Computer Science");

// // greet(); //direct call function --its give -> undefined undefined
// greet.call(Students1,"HELLO", "HOW ARE YOU BRO ??");


// // 2.
// function Employees(firstName,lastName,department){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.department = department;
// }

// let emps1 = new Employees("Ravi","Gautam","Civil Department");

// greet.call(emps1, "HII ","HOW ARE YOU DOING ??");
// greet.apply(emps1 ,["Namaste","-How have you been ??"])

// ---------------------------------------------------------------
// bind

function Std2(firstName,lastName,subject){
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
}

const greet = function (prefix , suffix){
    console.log(`${prefix} ${this.firstName} ${this.lastName} ${suffix}`);
}

let Std = new Std2("John","Doe","Computer Science");

greet.call(Std,"HELLO", "how are you ??");
greet.apply(Std,["HELLO", "HOW ARE YOU BRO ??"]);

let fn = greet.bind(Std);
console.log(fn);

fn("A","B");

