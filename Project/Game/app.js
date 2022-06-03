let blank = document.querySelector("#blank");
document.addEventListener("keypress", function (e) {
    console.log(e.keyCode);
   let key = String.fromCharCode(e.keyCode);
    if (key == "O" || key == "o") {
        blank.id = "o";
        blank.classList.add("pulse");
    }
    else {
        blank.classList.add("shake");
        setTimeout(() => {
            blank.classList.remove("shake");
        }, 1000);
    }
});