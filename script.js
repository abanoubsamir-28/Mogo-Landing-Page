$(document).ready(()=>{
// Vars
const hamburger = $(".hamburger") ; 
const navMenu = $(".nav-menu");
const times = $("#times") ; 
const search = $("#search") ; 
const searchoverlay = $(".searchoverlay")

// Navbar
hamburger.click(mobileMenu) ; 
function mobileMenu() {
    hamburger.toggleClass("active");
    navMenu.toggleClass("active");
    if (navMenu.attr('class').includes('active')) {
        $('body').css('overflow' , 'hidden') ; 
    } else {
        $('body').css('overflow' , 'auto') ; 
    }
}
$(window).scroll(function() {
    if ($(window).scrollTop() > $(window).height()) {
        $(".navbar").css("background-color","#E78483" );
    } else {
        $(".navbar").css( "background-color", "rgba(231, 132, 131, .6)" );
    }
});
search.click(() =>{
    searchoverlay.css('top' , "0") ; 
})  
times.hover(() => {
    times.toggleClass('fa-spin');
})
times.click(() => {
    searchoverlay.css('top' , "-200%") ; 
})
// Language
$("#language").click(() => {
    if($('#language').attr('value') == 'ar') {
        $('body').css('direction' , "rtl");
        $('#language').text("English") 
        $('#language').attr("value" , "en")  ;  
        $("[data-localize]").localize("arabic", { language: "ar" })
    } else {
        $('body').css('direction' , "ltr");
        $('#language').text("عربي") 
        $('#language').attr("value" , "ar")  ;  
        $("[data-localize]").localize("english", { language: "en" })
    }
})  
})



