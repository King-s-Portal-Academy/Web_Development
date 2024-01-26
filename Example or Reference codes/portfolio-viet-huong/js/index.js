//Scroll Top Button
	$(window).on('scroll', function () {
        var windowTop = $(window).scrollTop();
        var scrollTop = $('#scroll-top');

        if (windowTop >= 1100) {
            scrollTop.addClass('hasButton');
        } else {
            scrollTop.removeClass('hasButton');
        }
    });


    $('#scroll-top').on('click', function (e) {
        $('html, body').animate({
            'scrollTop': 0
        }, 1500);
        e.preventDefault();
    });
//Scroll Top Button

//Portfolio isotope
    $(document).ready(function() {
            $grid = $(".grid").isotope({
                itemSelector: ".grid-item",
                layoutMode: 'fitRows'
            });
            $(".filters-button-group").on("click", "button", function() {
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({
                    filter: filterValue
                });
            });

            $('.button-group').each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function() {
                    $buttonGroup.find('.active').removeClass('active');
                    $( this ).addClass('active');
                });
            });
    });

//onepage nav
    $(document).ready(function() {
        $('.hasScroll').onePageNav({

        });
    });

//wow js

    $(document).ready(function($) {
        new WOW().init();
    });

//scroll speed
    $(document).ready(function($) {
        $(function() {  
            jQuery.scrollSpeed(100, 700);
        });
    });