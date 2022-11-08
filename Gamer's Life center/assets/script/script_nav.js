
    const menuHamburger = document.querySelector(".menu_btn")
    const navLinks = document.querySelector("#nav_links")

    menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
    })