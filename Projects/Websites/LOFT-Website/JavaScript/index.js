var darkMode = document.querySelector("#darkMode");
darkMode.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        darkMode.src = "Images/sun.png";
    }else{
        darkMode.src = "Images/moon.png";
    }
}