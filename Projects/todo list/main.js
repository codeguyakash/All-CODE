
// let row = friendsData.friendsName.map(region => {
//     return {
//         "Name": friendsName.Name,
//         "Age": friendsName.Age,
//         "City": friendsName.City,
//     }
// });

// var table = document.getElementById("dataTable");
// var tbody = table.querySelector("tbody");

// row.forEach(region => {
//     var tr = document.createElement("tr");
//     Object.keys(region).forEach(key => {
//         var td = document.createElement("td");
//         td.innerHTML = region[key];
//         tr.appendChild(td);
//     });
//     tbody.appendChild(tr);
// })








let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");


addToDoButton.addEventListener("click",function(){
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-style");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
})