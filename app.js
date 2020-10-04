const navSlide = () => {
    const burger = document.querySelector('.burger');        
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const learnMoreButton = document.querySelector('.nav-button');

    burger.addEventListener('click', ()=>{
        toggleNavBar(nav, navLinks, burger);
    });

    learnMoreButton.addEventListener('click', (e) => {
        e.preventDefault();
        var destinationElementId = e.target.getAttribute('target');
        if(destinationElementId){
            $('html, body').animate({                
                scrollTop: $(`#${destinationElementId}`).offset().top - 30
            }, 1000);
        }  
    });

    navLinks.forEach((link) => {
        $(link).click(function(e) {
            e.preventDefault();
            var destinationElementId = e.target.getAttribute('target');
            if(destinationElementId){
                $('html, body').animate({                
                    scrollTop: $(`#${destinationElementId}`).offset().top - 70
                }, 1000);
                toggleNavBar(nav, navLinks, burger);
            }            
        });
    });    
}

const toggleNavBar = (nav, navLinks, burger) => {
    if($(burger).css('display') === "none"){
        return;
    }
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
        }        
    });

    burger.classList.toggle('toggle')
}



$(document).ready(function () {
    navSlide();
});
