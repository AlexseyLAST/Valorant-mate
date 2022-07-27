$(document).ready(function() {
    $('.nav__burger').click(function(event) {
        $('.nav__burger,.nav__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});