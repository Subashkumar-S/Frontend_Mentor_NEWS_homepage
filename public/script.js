const toggle = document.querySelector(".toggle");
const navbar = document.getElementById("navlist");
toggle.addEventListener("click" , function(){
   const visibility = navbar.getAttribute("data-visible");
   if(visibility === "false"){
    navbar.setAttribute("data-visible", true);
    toggle.setAttribute("aria-expanded", true);
   }else{
    navbar.setAttribute("data-visible", false);
    toggle.setAttribute("aria-expanded", false);
   }
});

  