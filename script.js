const hamBurger = document.getElementById("hamBurger");
const navbar = document.getElementById("navlist");
hamBurger.addEventListener("click" , function(){
    // console.log("hamburger clicked");
    navbar.classList.toggle("slide");
});

  