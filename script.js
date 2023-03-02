$(document).ready(function() {

    // $(".bkg-gif").fadeOut(3000);

    // $(".bkg-img").fadeIn(3000);

    $('.bkg-gif').fadeOut(2000).promise().done(function(){
        $('.bkg-img').fadeIn(2000);
    });
    
})