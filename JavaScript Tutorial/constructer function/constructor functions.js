let student1 = {
    firstName: "Ritik",
    lastName: "Hindu",
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let student2 = {
    firstName: "akash",
    lastName: "athiests",
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
console.log(student1);
console.log(student2);
student1.getFullName();

// --------------------------------------------------------------------------------------------

//this is code make easy to create new student objects
function createStudent(firstName,lastName){
    let student = {
        firstName:firstName,
        lastName:lastName,
        getFullName: function(){
            console.log(`${this.firstName} ${this.lastName}`);
        }
    }
    return student;
}

let student3 = createStudent("Suraj","Budhha");
console.log(student3);
student2.getFullName();

// --------------------------------------------------------------------------------------------
let student4 = createStudent("dhansukh lal","majboor")
console.log(student4);
student4.getFullName();

// --------------------------------------------------------------------------------------------
// constructor function

function Student(firstName,lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let student5 = new Student("ravi","gautam");
console.log(student5);

