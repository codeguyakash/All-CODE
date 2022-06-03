let student1 = {
    Name : "Akash",
    Class : "BCA 2nd Year",
    Age : 22,
    Add : {
        city : "Delhi",
        Pincode : 110091
    },
    "Mobile No." : 9718125109,

    getFullName:function(){
        console.log(this.Name + " " + this["Mobile No."]);
    }
};
console.log(student1)

student1.Address = "123 trilok puri delhi 110091" // for any property 
console.log(student1);

student1["Date of Birth"] = "15 August 1999";

console.log(student1);
console.log(student1.Name);
console.log(student1.Class);
console.log(student1.Age);
console.log(student1.Address);
console.log(student1["Date of Birth"]);
console.log(student1.Add.city);
console.log(student1.Add.Pincode);
console.log(student1["Mobile No."]);

student1.getFullName();


let student2 = {
    Name : "Ritik",
    Class : "Computer Science 2nd Year",
    Age : 21
}

console.log(student2);
console.log(student2.Name);
console.log(student2.Class);
console.log(student2.Age);

delete student2.Class; // for delete any property
console.log(student2);



let Car1 = {
    name : "Honda",
    type : "petrol",
    fuel : 10,
    drive : function(){
        if(this.fuel > 0){
            console.log("You Can Drive the Car");
        }
        else{
            console.log("please refill the tank")
        }
    }
};

Car1.drive();
Car1.fuel = 0;  // for reassign the new key value  
Car1.drive()


for(let i in Car1){   // this is use for all car1 propertys
    console.log(i);
}