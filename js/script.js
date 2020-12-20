(function($) {
    
    "use strict";

    // ==================== Preloader
    function preloader_load() {
        if($('.preloader').length){
            $('.preloader').delay(400).fadeOut(500);
        }
    }

    // ==================== Menuzord Megamenu
    function menuzord_menu() {
        if ($('.menuzord').length) {
            $('.menuzord').menuzord({
            align: "left",
            effect: "none",
            indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
            indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });
        }
        $('.menuzord').localScroll({
            duration:1000,
            easing: "easeInOutExpo",
            hash:true,
            target:'body',
            //axis:'xy',
            queue:true //one axis at a time
        });
    }

    // ==================== Navbar Scroll To Fixed
    function navbar_scrollfixed() {
        $('.scrollingto-fixed').scrollToFixed();
        var summaries = $('.summary');
        summaries.each(function(i) {
            var summary = $(summaries[i]);
            var next = summaries[i + 1];
            summary.scrollToFixed({
                marginTop: $('.scrollingto-fixed').outerHeight(true) + 10,
                limit: function() {
                    var limit = 0;
                    if (next) {
                        limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                    } else {
                        limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
                    }
                    return limit;
                },
                zIndex: 999
            });
        });
    }

    // ==================== Progress Bar / Levels
    if($('.progress-levels .progress-box .bar-fill').length){
        $(".progress-box .bar-fill").each(function() {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
            $(this).children('.percent').html(progressWidth+'%');
        });
    }

    // ==================== Gallery Masonry Isotop And Other Gallery and Lightbox
    function masonryIsotop() {
        if ($('.isotope-gallery').length) {
            $('.isotope-gallery').isotope({
                layoutMode:'masonry'
            });
        }
        if($('.isotope-filter').length){
            $('.isotope-filter a').children('span').on('click', function(){
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                $('.isotope-filter a').children('span').parent().removeClass('active');
                Self.parent().addClass('active');
                $('.isotope-gallery').isotope({ filter: selector });
                return false;
            });
        }
    }

    // ==================== Tab
    function widgetTab() {
        if ($('.tab-widget').length) {
            var tabWrap = $('.tab-widget-content');
            var tabClicker = $('.tab-widget ul li');            
            tabWrap.children('div').hide();
            tabWrap.children('div').eq(0).show();
            tabClicker.on('click', function() {
                var tabName = $(this).data('tab-name');
                tabClicker.removeClass('active');
                $(this).addClass('active');
                var id = '#'+ tabName;
                tabWrap.children('div').not(id).hide();
                tabWrap.children('div'+id).fadeIn('500');
                return false;
            });        
        }
    }

    // ==================== fact-counter
    $(window).scroll(startCounter);
    function startCounter() {
        if ($(window).scrollTop() > 200) {
            $(window).off("scroll", startCounter);
                   
            $('.animate-numbers').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
       
        }
    }

    // ==================== Wow animation
    function wowAnimation() {
        var wow = new WOW({
            mobile: true // trigger animations on mobile devices (default is true)
        });
        wow.init();
    }

     //LighvtBox / Fancybox
    if($('.lightbox-image').length) {
      $('.lightbox-image').fancybox();
    }

    // ==================== OWL CAROUSEL AND OTHER SLIDER SCRIPT 
    // Owl-News-carousel
    if($('.owl-carousel-grid-one, .blog-img-carousel').length){
        $('.owl-carousel-grid-one').owlCarousel({
            loop:true,
            margin:30,
            dots: true,
            nav:false,
            autoplayHoverPause:false,
            autoplay: false,
            smartSpeed: 700,
            navText: [
              '<i class="lnr lnr-arrow-left"></i>',
              '<i class="lnr lnr-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }
    // Owl-News-carousel
    if($('.blog-img-carousel').length){
        $('.blog-img-carousel').owlCarousel({
            loop:true,
            margin:30,
            dots: false,
            nav:true,
            autoplayHoverPause:true,
            autoplay: true,
            smartSpeed: 700,
            navText: [
              '<i class="lnr lnr-arrow-left"></i>',
              '<i class="lnr lnr-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    // Owl-Service-carousel
    if($('.service-details-carousel').length){
        $('.service-details-carousel').owlCarousel({
            loop:true,
            margin:30,
            dots: false,
            nav:true,
            autoplayHoverPause:false,
            autoplay: false,
            smartSpeed: 700,
            navText: [
              '<i class="fa fa-angle-double-left"></i>',
              '<i class="fa fa-angle-double-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    // Owl-Testimonial-carousel
    if($('.testimonial-carousel').length){
        $('.testimonial-carousel').owlCarousel({
            loop:true,
            margin:30,
            dots: true,
            nav:false,
            autoplayHoverPause:false,
            autoplay: false,
            smartSpeed: 700,
            navText: [
              '<i class="lnr lnr-arrow-left"></i>',
              '<i class="lnr lnr-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    // Owl-News-carousel
    if($('.owl-carousel-grid-two, .news-slider').length){
        $('.owl-carousel-grid-two, .news-slider').owlCarousel({
            loop:true,
            margin:30,
            dots: false,
            nav:true,
            autoplayHoverPause:false,
            autoplay: false,
            smartSpeed: 700,
            navText: [
              '<i class="lnr lnr-arrow-left"></i>',
              '<i class="lnr lnr-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        })
    }

    // Owl-Service-carousel 
    if($('.service-carousel-et-one').length){
        $('.service-carousel-et-one').owlCarousel({
            loop:true,
            margin:10,
            dots: false,
            nav:true,
            autoplayHoverPause:false,
            autoplay: false,
            smartSpeed: 700,
            navText: [
              '<i class="fa-angle-double-left"></i>',
              '<i class="fa-angle-double-right "></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items: 1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2,
                    center: false
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }
    // Owl-gallery-carousel service-carousel-et-one
    if($('.owl-carousel-grid-three, .gallery-slider').length){
        $('.owl-carousel-grid-three, .gallery-slider').owlCarousel({
            loop:true,
            margin:10,
            dots: false,
            nav:true,
            autoplayHoverPause:false,
            autoplay: false,
            smartSpeed: 700,
            navText: [
              '<i class="lnr lnr-arrow-left"></i>',
              '<i class="lnr lnr-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items: 1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2,
                    center: false
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })
    }
    // Owl-gallery-carousel service-carousel-et-one
    if($('.et-project-one-carousel, .gallery-slider').length){
        $('.et-project-one-carousel, .gallery-slider').owlCarousel({
            loop:true,
            margin:5,
            dots: true,
            nav:false,
            autoplayHoverPause:false,
            autoplay: false,
            smartSpeed: 700,
            navText: [
              '<i class="lnr lnr-arrow-left"></i>',
              '<i class="lnr lnr-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items: 1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3,
                    center: false
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        })
    }

    // ==================== Scroll To top
    function scrollToToped() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 600) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        
        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    }


/* ==========================================================================
   When document is ready, do
   ========================================================================== */
    $(document).on('ready', function() {
        // add your functions
        menuzord_menu();
        navbar_scrollfixed();
        scrollToToped();
        wowAnimation();
        widgetTab();
    });

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
    // window on Scroll function
    $(window).on('scroll', function() {
        // add your functions
    });
    
/* ==========================================================================
   When document is loading, do
   ========================================================================== */

    $(window).on('load', function() {
        // add your functions
        preloader_load();
        masonryIsotop();
    }); 


/* ==========================================================================
   When Window is resizing, do
   ========================================================================== */
    $(window).on('resize', function() {
        // add your functions
    });


})(window.jQuery);