function Employee(name, age, department){
    this.name = name;
    this.age = age;
    this.department = department;
}
let employees = [
    new Employee("Akash",22,"core"),
    new Employee("Veer",21,"DevOps"),
    new Employee("Ravi",22,"Core"),
    new Employee("Suraj",25,"Admin"),
    new Employee("Ritik",27,"Admin"),
];

function filterByAge(emps,age)
{
    let result = [];
    for(let i=0;i < emps.lenght; i++)
    {
        if(emps[i].age == age)
        {
            result.push(emps[i]);
        }
    }
    return result;
}
// ---------------------------------
// function filterByDept(emps,dept){
//     let result = [];
//     for (let i=0; i< emps.lenght; i++){
//         if (emps[i].department ==department){
//             result.push(emps[i]);
//         }
//     }
//     return result;
// }

console.log(filterByAge(employees,27));
// console.log(filterByDept(employees,"Admin"));