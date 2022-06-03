let name = "Akash form Modules2.js File";
function sum(a, b) {
  console.log(a + b);
}

// class test {
//   constructor() {
//     console.log("Hello this is constructor");
//   }
// }

// export { name, sum, test };

export default function(){
    console.log("I am Default Exported Function")
}

export {name,sum}