$(document).ready(function(){
$(".owl-carousel").owlCarousel({
    dots:false,
    startPosition: 'URLHash',
    autoplay:true,
    autoplayTimeout:3000,
    items: 1,
    loop: true,
    nav: true,
    navText: [
        '<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'
    ]
});
});
