const bar = document.querySelector("#bar");
const menu = document.querySelector(".menu");

bar.addEventListener("click", function(){
    // console.log("You Clicked me");
    menu.classList.toggle("menuHide");
    bar.classList.toggle("barRotate");
})


