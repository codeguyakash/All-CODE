// 1st Rule

let obj1 = {
    firstName: "Akash",
    lastName: "Athiest",
    getFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}
obj1.getFullName();

// 2nd Rule

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let Person1 = new Person("Ravi", "Kumar");
console.log(Person1);
Person1.getFullName();



// 3rd
function printMessage() {
    console.log(this);
}
printMessage();

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

let person1 = new Person("Ms.Sharda", "Mother");

Person("Mr.Veerpal", "Father");

printMessage();

let obj = new printMessage();
