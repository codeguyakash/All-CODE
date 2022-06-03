let social = ["facebook","instagram","twitter"];
console.log(social);

//Push 
social.push("Quora"); //push is use to add element from last
social.push("Youtube"); //push is use to add element from last
social.push("Gmail"); //push is use to add element from last
console.log(social);

//Pop
social.pop(); // pop is use to remove element from last
let ele = social.pop(); // pop is use to remove element from last
console.log(ele);
console.log(social);



// //unshift
social.unshift("XYZ","MNO"); // unshift is use to add element from start
social.unshift();
console.log(social);


// // Shift
social.shift(); // shift is use to remove element from start
console.log(social);

let fname = ["akash", "ritik", "suraj"]
console.log(fname);

fname.push("ravi"); // for add 
fname.push("ravi gautam");
console.log(fname);

fname.pop(); //for remove from last
let res1 = fname.pop(); // remove from first
console.log(fname)
console.log(res1)

let res = fname.shift(); // remove from first
console.log(fname);
console.log(res);

fname.unshift("mayur", "rajesh"); // add in start
console.log(fname);



console.log(fname); 
console.log(fname.indexOf("ritik")); // known index

console.log(fname);
console.log(fname.join(", "));  

// splice 

fname.splice(1, 2); //remove
console.log(fname);

fname.splice(1, 0, "deepak", "nikhil") // add
console.log(fname);

fname.splice(1, 1, "shiv"); //replace
console.log(fname);

 // 2D Array

 let num = [
     ["apple","mango","banana"],
     ["potato","tomato"],
     ["dog"]
    ];
 console.log(num);
