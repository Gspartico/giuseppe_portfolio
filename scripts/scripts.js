const portfolio = {};

// Document Ready

$(function () {
    portfolio.init();
})

portfolio.init = function(){
    portfolio.textShadow();
    portfolio.backToTop();
    portfolio.reveal();
    portfolio.burger();
    portfolio.sideNav();
}

portfolio.textShadow = function(){

let firstShadow = getShadow('#fa3297', 1000, 'bottomLeft');
let secondShadow = getShadow('#FF1E50', 1000, 'bottomRight');

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
// Credit for text-shadow function to Tiff Noguira and Kristen Spencer from the codepens at https://codepen.io/tiffanydanielle/pen/JOQWdy and https://codepen.io/kristencodes/pen/KyjmNX?editors=1100

}

portfolio.backToTop = function () {
    $(".toTop").on('click', function () {
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 1300);
    })
}

portfolio.reveal = function () {
    $(window).scroll(function () {
        $('#about__svg').each(function () {
            let imagePos = $(this).offset().top;
            let imageHeight = $(this).height();
            let topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $('#revealAbout').addClass("revealOnScroll");
            }
        });
    });
}

portfolio.burger = function () {
    $(document).delegate('.open', 'click', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function (event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.close', 'click', function (event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
}

portfolio.sideNav = function (){
        const nav = $(".nav__sidebar");
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();

            if (scroll >= 170) {
                nav.addClass('showicons').removeClass('hide');
            } 
            else{
                nav.addClass('hide');
            }
        });
    };
