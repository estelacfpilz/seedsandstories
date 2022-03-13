// ----------- Hamburger button
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

// ----------- Lightgallery
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});