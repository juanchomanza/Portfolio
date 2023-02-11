let toggle = document.querySelector(".nav__toggle")
let nav = document.querySelector(".nav-items__responsive")
let nav2 = document.querySelector(".nav-bar-responsive")


toggle.addEventListener("click", ()=> {
    nav.classList.toggle("heigth")
})

nav.addEventListener("click", ()=>{
    nav.classList.remove("heigth")
})
