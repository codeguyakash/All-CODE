let select = document.getElementById("language")

var tech = ["JavaScript","React","NodeJs","Python"]

tech.forEach(item =>{
    var option = document.createElement("option");
    option.innerText = item;
    option.value = item;
    select.appendChild(option)
})