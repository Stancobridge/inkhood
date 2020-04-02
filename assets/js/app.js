function toggleClass(el, clasOne, clasTwo) {
  if (el.classList.contains(clasOne)) {
    el.classList.remove(clasOne);
    el.classList.add(clasTwo);
  } else {
    el.classList.remove(clasTwo);
    el.classList.add(clasOne);
  }
}

let mobileNavMenu = document.querySelector(".nav-menu-mobile");

let openNav = document.querySelector("#opennav");
let closenav = document.querySelector("#closenav")

// closenav.addEventListener("click", () => {
//   toggleClass(mobileNavMenu, "show-mobile-nav", "close-mobile-nav");
// });

// openNav.addEventListener("click", () => {
//   toggleClass(mobileNavMenu, "show-mobile-nav", "close-mobile-nav");
// });

let elipse = document.querySelector('.elipse')
let dropMenu = document.querySelector('.drop-menu');


elipse.addEventListener('click', () =>{
  if(dropMenu.classList.contains('drop-menu-anim'))
  {
    dropMenu.classList.remove('drop-menu-anim')
  } else{
    dropMenu.classList.add('drop-menu-anim')
  }
})