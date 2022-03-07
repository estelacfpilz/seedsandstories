// ----------- Hamburger button
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

// ----------- Accordion class of active
$('.accordion-title').click(function(){
    $(this).toggleClass('accordion-active');
})