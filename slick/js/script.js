window.onload = windowload;
window.onresize = resize;

function windowload() {
    resize();
}


function resize() {
    if (window.innerWidth >= 750) {

        $(document).ready(function() {
            $('.section_gallery__gallery').slick('unslick');
        });


    } else {

        $(document).ready(function() {

            $('.section_gallery__gallery').slick({
                dots: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                responsive: [

                    {
                        breakpoint: 749,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            slidesToShow: 1,
                            adaptiveHeight: true
                        }
                    }
                ]
            });

        });


    }

}

$('.header_menu__button').click(function () {
            $('.header_menu__button').toggleClass('header_menu__button-click');
            $('.header_menu').toggleClass('header_menu__open');
            $('.header_content').toggleClass('header_content-new');
            
        });
