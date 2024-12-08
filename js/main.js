const $header = document.querySelector(".header")
const $toggleBtn = document.querySelector(".toggle__btn")
const $toggleBtnIcon = document.querySelector(".toggle__btn i")
const $dropMenu = document.querySelector(".drop__menu")
const $a = document.querySelectorAll(".enlace-interno")
const $btnPersonajes = document.querySelector(".btn-more__info");


$a.forEach(a => {
    let moveTo = a.getAttribute('moveTo');
            
    a.addEventListener("click", (e)=>{
        e.preventDefault()
        if (moveTo) {
            const target = document.getElementById(moveTo);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
        }
    })            
})

const classOpen = ()=>{
    const isOpen = $dropMenu.classList.contains('open')
    
    $toggleBtnIcon.classList = isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

$toggleBtn.addEventListener("click", ()=>{
    $dropMenu.classList.toggle('open')
    if($dropMenu.classList.contains("open")){
        $header.classList.add("scrolled")
    } else {
        $header.classList.remove("scrolled")

    }
    classOpen();
})

window.addEventListener("resize", () => {
    if(window.innerWidth > 500){
        $dropMenu.classList.remove('open')

        classOpen()
    }
});

document.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      $header.classList.add("scrolled");
    } else {
      $header.classList.remove("scrolled");
    }
});

$btnPersonajes.addEventListener("click", () =>{
    const btnId = $btnPersonajes.getAttribute("data-id");
    
    if(btnId == 1){

        window.location.href = "personajes.html"
    }

    if(btnId == 2){
        window.location.href = "index.html"
    }
})
  
