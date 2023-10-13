var icon = document.getElementById("mode");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "icons/sun.svg";
    }
    else{
        icon.src = "icons/moon.svg";
    }
}