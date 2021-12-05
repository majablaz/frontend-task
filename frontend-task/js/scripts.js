$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    stagePadding: 10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
} );

//mobile nav
$(".hamburger a").click(function(event){
    event.preventDefault();
    $(this).toggleClass("close-menu");
    $(".mobile-nav").toggleClass("open-menu");
})
