// class hello{
//     message(){
//         console.log("Hello Everyone")
//     }
// }
// let a = new hello();
// a.message();

// class hello{
//     sorry(){
//         console.log("Sorry guys i don't know who are you")
//     }
// }
// let a = new hello();
// a.sorry();
// Constructor function no need to call
// class student{
//   constructor() {
//       let name;
//     console.log("Hii i am constructor function");
//   }
//   hello(){
//       console.log("Hello " + this.name);
//   }
// }
// let a = new student();
// a.name = "Code Guy";
// a.hello();

class student{
  constructor(name,age) {
       this.studentname=name;
       this.studentage=age;
    console.log("Hii i am constructor function");
  }
  hello(){
      console.log(`Hello ${this.studentname}`);
      console.log(`Your Age is - ${this.studentage}`);
  }

  static staticMethods(){
      console.log("I am Static Methods You can't make object of this function");
  }
}
let a = new student("Akash",22);
let b = new student("Ritik",25);
a.hello();
b.hello();
student.staticMethods();