function multiplier(x){
    let fn = function (y){
        return x*y;
    }
    return fn;
}

let multiplier2 = multiplier(8);
console.log(multiplier2);
console.log(multiplier2(5));

let multiplier3 = multiplier(7);
console.log(multiplier3(9));
console.dir(multiplier2);
console.dir(multiplier3);


// --------------------------------------------------------------------------------------

function persion(firstName, lastName, age){
    this.getfullName = function(){
        return firstName + " " + lastName;
    }
}
let person1 = new persion("ritik", "suraj", 22);
console.log(person1);


