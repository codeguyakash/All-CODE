function add(a,b){
    console.log(a+b);
}
add(5,20);

// -rest operator (...) it is use to multiple arguments ---------------------------------------

function sum(...a){
    let result = 0;
    a.forEach(num=>{
        result+=num;
    });
    console.log(result)
}
sum(2,8);
sum(58,98)

// -spread operator (...) it is use to copy arrays ---------------------------------------
let nums = [3,4,5];
let nums2 = [1,2,...nums];
console.log(nums2);

// --
let number = [1,2,3];
let copiedArray = [...number];
console.log(copiedArray);

let merge = [...nums,...number];
console.log(merge);

let person = {
    firstName: "Akash",
    LastName: "Atheist",
    age:22
};

let person2 = {...person, "adddress": "india"};
console.log(person2);


// Destructuring----------------------------------------------------
let NUM = [4,5,6];
let [first,second]=NUM;    //for known first position and second position
console.log(first,second);

let PERSON = {
    firstName: "Akash",
    LastName:"Atheist",
    Age:22
}

//if you have already variable of Same name which is want to access then you need to create a news variable and assign the value you want access
let firstName = "Suraj"

let {firstName: firstX, LastName} = PERSON;
console.log(firstX);
console.log(LastName);