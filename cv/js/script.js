$(function () {

    //Pages content opacity animation ---------------------------------
    $('section, #diaporama').animate({
        opacity: 1
    }, 300);

    //Scroll link animation -------------------------------------------
    $('nav #menu li a, nav .name a, footer .go-top, .button-project').on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data("scroll")).offset().top
        }, 1000);
    })
    
    //Scroll Nav shadow -------------------------------------------
       $(window).scroll(function () {
          if ($(this).scrollTop() > 0) { 
              $('nav').addClass("shadow-nav");
          } else {
            $('nav').removeClass("shadow-nav");
          }
       });

    // Small menu animation ---------------------------------
    var smallMenu = Object.create(smallMenuModel);

    $('#small-menu-link').hide().css({
        opacity: 1
    });

    $('#small-menu').on("click", function () {
        if ($('#small-menu-link').is(":hidden")) {
            smallMenu.switch_on();
            if ($(this).scrollTop() > 0) { 
              $('nav').removeClass("shadow-nav");
            }
        } else {
            smallMenu.switch_off();
            if ($(this).scrollTop() > 0) { 
              $('nav').addClass("shadow-nav");
            }
        }
        $('#small-menu-link').slideToggle(200);
    });

    $('#small-menu-link a').on("click", function () {
        $('#small-menu-link').slideUp(200);
        smallMenu.switch_off();
    });

    //Project animation --------------------------------------------
    $('.ascenseur').next("div").hide();
    $('#project-one .ascenseur').next("div").show();
    $('#project-one .ascenseur').children('i').attr('class', 'fas fa-caret-down');

    $('.ascenseur').on("click", function () {
        if ($(this).next("div").is(":hidden")) {

            $('.ascenseur').next("div").slideUp(800);
            $('.ascenseur').children('i').attr('class', 'fas fa-caret-right');
            $(this).next("div").slideDown(800);
            $(this).children('i').attr('class', 'fas fa-caret-down');
        } else {
            $(this).next("div").slideUp(800);
            $(this).children('i').attr('class', 'fas fa-caret-right')
        };
    })
});
