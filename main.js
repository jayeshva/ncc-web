// var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
// var mobileMenu = document.querySelector(".mobile-menu");
// mobileMenuBtn.addEventListener("click", () => {
//   if (mobileMenu.style.display === "none") {
//     mobileMenu.style.display = "flex";
//     mobileMenuBtn.innerHTML = "Close";
//   } 
//   else {
//     mobileMenu.style.display = "none";
//     mobileMenuBtn.innerHTML = "&#9776";
//   }
// });

function myFunction() {
    var x = document.getElementById("mobileview");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }