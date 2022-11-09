
    const menuHamburger = document.querySelector(".menu_btn")
    const navLinks = document.querySelector("#nav_links")
    const body = document.querySelector('body')

    menuHamburger.addEventListener('click',()=>{
    
    navLinks.classList.toggle('mobile-menu')
    if (navLinks.classList.contains('mobile-menu')) {
        body.style.overflow = "hidden"
    }else{
        body.style.overflow = "scroll"
  
    }
    })