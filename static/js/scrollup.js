$(document).ready(function(){
    $(window).scroll(function () {if ($(this).scrollTop() > 0) {$('#scroller').fadeIn();} else {$('#scroller').fadeOut();}});
    $('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 400); return false;});
});