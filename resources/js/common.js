$(window).on('scroll', e => {
    $('h2').each(function () {
        if ($(this).offset().top - 200 < $(window).scrollTop()) {
            let id = '#' + $(this).text().toLowerCase()
            $('li').removeClass('active')
            $('li' + id).addClass('active')
        }
    })
})