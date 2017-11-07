//--FADE---------------------------------------------------------------------------------------------

$(window).scroll( function(){

    $('.fadeIn').each( function(){
        
        var top_of_div       = $(this).offset().top;
        var bottom_of_div    = $(this).offset().top; + $(this).height();
        var top_of_window       = $(window).scrollTop();
        var bottom_of_window    = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > 1.05*top_of_div ){
            
            $(this).animate({'opacity':'1'},1400);
                
        } 
        
    }); 

});

//--NAVBAR ITEMS-------------------------------------------------------------------------------------

$("#nav1").click(function () {
    $('html,body').animate({
        scrollTop: $("#s1").offset().top},'slow');
});

$("#nav2").click(function () {
    $('html,body').animate({
        scrollTop: $("#s2").offset().top},'slow');
});

$("#nav3").click(function () {
    $('html,body').animate({
        scrollTop: $("#s3").offset().top},'slow');
});

//--FADING NAVBAR BACKGROUND-------------------------------------------------------------------------

$(window).scroll( function(){

    if ($(window).scrollTop() >= 796 ) {
        $('.navbar').fadeIn("slow", function() {
            $(this).addClass('navbarbg');
        });                
    } else {
        $('.navbar').removeClass('navbarbg');
    };

});





