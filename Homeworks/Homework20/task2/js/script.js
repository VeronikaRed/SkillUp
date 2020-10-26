$('#button').click(() => {
    if ($('#button').hasClass("done")) {
        alert('I did all:)');
    } else {
        $('.box').animate({
            width: 400,
            percent: 100,
        }, {
            start: () => {
                $('#button').after('<div class="process">Loading</div>');
                $('.borderBox').css({"border": "1px solid grey"});
            },
            duration: 7000,
            progress: function (animation, progress, msRemaining) {
                $('.box').html(Math.round(100 * progress) + "%");
            },
            complete: () => {
                $('.process').html('Ready');
            $('#button').addClass("done")
            }
        });

        $('#button').addClass("done");
    }
})

