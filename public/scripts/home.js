$(document).ready(function(){
    var windowsize = $(window).width();

    $(".home-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".home").offset().top
        }, 700);
    });

    $(".about-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".about").offset().top
        }, 300);
    });

    $(".projects-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".projects").offset().top+2
        }, 300);
    });

    $(".skills-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".skills").offset().top+2
        }, 300);
    });

    $(".contacts-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".contacts").offset().top
        }, 300);
    });

    //mobile
    $('.fixed-action-btn').floatingActionButton();

    if($(window).scrollTop()) {
        $('.header-custom').addClass('hide-on-small-only');
        $('.fixed-action-btn').removeClass('hide');
    } else {
        $('.fixed-action-btn').addClass('hide');
    }

    $(window).scroll(function() {
        if(windowsize < 600 && $(window).scrollTop()) {
            $('.header-custom').addClass('hide-on-small-only');
            $('.fixed-action-btn').removeClass('hide');
        } else {
            $('.header-custom').removeClass('hide-on-small-only');
            $('.fixed-action-btn').addClass('hide');
        }
    });

  });
  
