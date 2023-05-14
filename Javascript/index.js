$(document).ready(function () {
    $(window).on("scroll", function () {
        var imageTop = $('#img-saxo-jura').offset().top;
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();

        if (scroll + windowHeight > imageTop) {
            $('#img-saxo-jura').css({
                bottom: 0,
                opacity: 1
            });
        }
    });
});
