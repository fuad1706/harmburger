let harmburger = document.querySelector(".harmburger");
let menuBox = document.getElementById("menuBox");

harmburger.onclick = function(){
    menuBox.classList.toggle("open-menu");

    if(menuBox.classList.contains("open-menu")){

        harmburger.src = "icon-close.svg";

    }

    else{
        harmburger.src = "icon-hamburger.svg";
    }
}