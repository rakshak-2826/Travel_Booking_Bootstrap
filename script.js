$(document).ready(function () {

    $('#bg-yellow-card').mouseover(function () {
        var e = $(this);
        $('.zoom .beach').css({
            'transform': 'scale(1.4)'

        });
    });
    $('#bg-yellow-card').mouseout(function () {
        var e = $(this);
        $('.zoom .beach').css({ 'transform': 'scale(1.0)' });
    });

    $('#bg-green-card').mouseover(function () {
        var e = $(this);
        $('.zoom .tiger').css({ 'transform': 'scale(1.4)' });
    });
    $('#bg-green-card').mouseout(function () {
        var e = $(this);
        $('.zoom .tiger').css({ 'transform': 'scale(1.0)' });
    });

    $('#bg-green1-card').mouseover(function () {
        var e = $(this);
        $('.zoom .river').css({ 'transform': 'scale(1.4)' });
    });
    $('#bg-green1-card').mouseout(function () {
        var e = $(this);
        $('.zoom .river').css({ 'transform': 'scale(1.0)' });
    });

    $('#bg-purple-card').mouseover(function () {
        var e = $(this);
        $('.zoom .paraliding').css({ 'transform': 'scale(1.4)' });
    });
    $('#bg-purple-card').mouseout(function () {
        var e = $(this);
        $('.zoom .paraliding').css({ 'transform': 'scale(1.0)' });
    });

});