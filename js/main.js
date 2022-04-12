var d = document;

d.addEventListener("click",(e)=>{
    var menu = d.querySelector('.hamburger');
    var navList = d.querySelector(".nav-list-items");
    //console.log(e.target);
    if (e.target.matches(".hamburger") || e.target.matches("._layer")) {
        console.log("dasd");
        menu.classList.toggle("is-active");
        navList.classList.toggle("is_active");

    }else if(e.target.matches("body *") || e.target.matches("main *")){
        if(navList.classList.contains("is_active")){
            navList.classList.toggle("is_active");
            menu.classList.toggle("is-active");
        }
    }else if(e.target.matches(".nav-list-items a")){
        navList.classList.toggle("is_active");
        menu.classList.toggle("is-active");
    }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}





