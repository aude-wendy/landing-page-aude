$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

function subscribe() {
    alert("Merci de vous être abonné ! Plus d'informations vous seront envoyées par email.");
}
