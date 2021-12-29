const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const NavLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{  
        nav.classList.toggle('nav-active');

    NavLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation ='';
        }
        else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }

        });
   
    burger.classList.toggle('toggle');
    });
}
navSlide();

var indexValue = 0;
function slideShow(){
    setTimeout(slideShow, 4000);
    var x;
    const img = document.querySelectorAll("img");
    for(x = 0; x < img.length; x++){
        img[x].style.display = "none";
    }
    indexValue ++;
    if(indexValue > img.length) {indexValue = 1}
    img[indexValue - 1].style.display = "block";
}
slideShow();


