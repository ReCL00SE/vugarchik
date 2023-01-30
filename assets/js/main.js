$('.slider ').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '.arrows .slick-prev',
    nextArrow: '.arrows .slick-next',
    infinite: false,
    responsive: [
        {
            breakpoint: 787,
            settings: {
                slidesToShow: 1,

            }
        }
    ]
});