const portfolio = {};

// Document Ready

$(function () {
    portfolio.init();
})

portfolio.init = function(){
    portfolio.textShadow();
    portfolio.backToTop();
    portfolio.reveal();
}

// AOS.init();

portfolio.textShadow = function(){

let firstShadow = getShadow('#fa3297', 510, 'bottomLeft');
let secondShadow = getShadow('#FF1E50', 400, 'bottomRight');

 $('h1').attr('style', firstShadow);
$('h2').attr('style', secondShadow);

function getShadow(color, pxlength, direction) {
    textShadow = [];
    if (direction === 'topLeft') {
        for (let i = 1; i < pxlength; i++) {
            let str = `-${i}px -${i}px ${color}`;
            textShadow.push(str);
        }
    } else if (direction === 'bottomRight') {
        for (let i = 1; i < pxlength; i++) {
            let str = `${i}px ${i}px ${color}`;
            textShadow.push(str);
        }
    } else if (direction === 'bottomLeft') {
        for (let i = 1; i < pxlength; i++) {
            let str = `-${i}px ${i}px ${color}`;
            textShadow.push(str);
        }
    } else {
        for (let i = 1; i < pxlength; i++) {
            let str = `${i}px ${i}px ${color}`;
            textShadow.push(str);
        }
    }
    return `text-shadow: ${textShadow.join()};`
}
// Credit for text-shadow function to Tiff Noguira and Kristen Spencer from the codepens -
}

portfolio.backToTop = function () {
    $(".toTop").on('click', function () {
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 1000);
    })
}

portfolio.reveal = function () {
    $(window).scroll(function () {
        $('#about__svg').each(function () {
            var imagePos = $(this).offset().top;
            var imageHeight = $(this).height();
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $('#revealAbout').addClass("revealOnScroll");
            }
        });
    });
}
