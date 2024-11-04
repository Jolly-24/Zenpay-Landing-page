const space = $("#first").offset().top

$(window).on("scroll",function(){
    if($(window).scrollTop()>space){
       $("#nav").removeClass("bg-transparent ")
       $("#nav").addClass("bg-teal-900")
    }else{
        $("#nav").addClass("bg-transparent")
        $("#nav").removeClass("bg-teal-900")
    }
})
const sectionAppear = $("#appear").offset().top
$(window).on("scroll",function(){
    if($(window).scrollTop()>sectionAppear){
      $("#fade").fadeIn(700)
    }else{
        $("#fade").fadeOut(500)
    }
})
const cardAppear = $("#card").offset().top
$(window).on("scroll",function(){
    if($(window).scrollTop()>cardAppear){
      $("#image").slideDown(3000)
    }else{
        $("#image").slideUp(500)
    }
})
const contactAppear = $("#contact").offset().top;

$(window).on("scroll", function () {
    if ($(window).scrollTop() > contactAppear) {
        // Bring elements on-screen by removing the off-screen translate classes
        $("#contactInfo").removeClass("-translate-x-72").addClass("translate-x-0");
        $("#contactForm").removeClass("translate-x-72").addClass("translate-x-0");
    } else {
        // Move elements back off-screen
        $("#contactInfo").removeClass("translate-x-0").addClass("-translate-x-72");
        $("#contactForm").removeClass("translate-x-0").addClass("translate-x-72");
    }
});


const swip = $("#swip").offset().top;
let isAnimated = false; 

$(window).on("scroll", function () {
    if ($(window).scrollTop() > swip) {
        if (!isAnimated) {
            $("#over").stop().animate({ left: "700px" }, 2700);
            isAnimated = true; 
        }
    } 
    else {
        if (isAnimated) {
            $("#over").stop().animate({ left: "0px" }, 500);
            isAnimated = false; 
        }
    }
});

$(".navbar ul a").on("click" ,function(){
    const link = $(this).attr("href");
    const linkOffset = $(link).offset().top
    $("html,body").animate({scrollTop:linkOffset},1000)
})