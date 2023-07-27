// JavaScript to enable smooth scrolling in the horizontal carousel
document.addEventListener("DOMContentLoaded", function() {
    const productCarousel = document.querySelector(".product-carousel");
    productCarousel.addEventListener("scroll", function() {
        productCarousel.scrollLeft += 1;
    });
});

// JavaScript to initialize the slick carousel
document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    // Initialize the slick carousel
    $(sliderContainer).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000, // Change slide every 3 seconds
        infinite: true,
        vertical: true,
        verticalSwiping: true,
    });
});