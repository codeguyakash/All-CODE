class employee{
    constructor(name,age,salary){
        this.empname=name;
        this.empage=age;
        this.empsalary=salary;
        console.log("Constructing : Employee ");
    }
    info(){
        console.log(`Employee Class 
      Name : ${this.empname}
      Age : ${this.empage}
      Salary : ${this.empsalary}
      `);
    }
}
class manager extends employee {
  // constructor(name){
  //     super();
  //     console.log("Constructing : Manager " + name)
  // }
  info() {
      let ta = 1000;
      let pa = 300;
      let totalsalary = this.empsalary + ta + pa;
      console.log(`Manager Class 
      Name : ${this.empname}
      Age : ${this.empage}
      Salary : ${totalsalary}
      `);
  }
}
class test extends manager{

}

// const e = new employee();
// const m = new manager("Akash" ,22 , 25000);
const m = new test("Akash" ,22 , 25000);
// const u = new manager("Ritik" ,25 , 15000);
m.info();
// u.info();