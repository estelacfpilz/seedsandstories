// ----------- Hamburger button
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

// ----------- Accordion class of active
$('.accordion-title').click(function(){
    $(this).toggleClass('accordion-active');
})

// ----------- Lightgallery
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});