$(document). ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");

        }
    })
})


// typing animation script
var typed =new Typed(".typing",{
    strings:["Web designer","Web developer","Digital Marketer"],
    typeSpeed:100,
    backSpeed:60,
    loop: true


})