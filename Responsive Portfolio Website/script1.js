$(document).ready(function(){  //checking if the document has loaded or not then apply the following functions 
    $(window).scroll(function(){ //creating a sticky nav bar that moved down along the page
        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        //creating a button to scroll up. scroll up button hide/show script 
        if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");
        }
        else
        {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // sliding up on clicking button 
    // removing smooth scroll on slide up button click
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
        $('html').css("scrollBehavior","auto");
    });
    // applying smooth scroll when we click on the items in the navbar
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior","smooth");
    });
    
    //adding active class if it is not present else removing if it is present 
    //active class gives the red(crimson color) to the navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing text animation script (using jquery animation script)
     var typing1 = new Typed(".typing",{
         strings:["Programmer","Developer","Freelancer","Chess Enthusiast","Problem solver"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typing2 = new Typed(".typing-2", {
        strings: ["Programmer", "Developer", "Freelancer","Chess Enthusiast","Problem solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //own carousel script to add slider code in the website (precoded)
     $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});