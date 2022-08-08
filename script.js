$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger ,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$('.reviews__slider').slick({
    dots:true,
    arrows: false,
    infinite:true,
    autoplay:true,
    autoplaySpeed:10000,
});
$('.mentors__slider').slick({
    dots:true,
    arrows: false,
    infinite:true,
    autoplay:true,
    autoplaySpeed:10000,
});




$('.cards').slick({
    

        autoplay: false,
        arrows:false,
        responsive: [
           
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },


        ]
    });



