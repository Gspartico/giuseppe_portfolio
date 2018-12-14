$(function () {
    let firstShadow = getShadow('#fa3297', 510, 'bottomLeft');
    // let secondShadow = getShadow('#ff4479', 400, 'bottomRight');
    let secondShadow = getShadow('#FF1E50', 400, 'bottomRight');

    $('h1').attr('style', firstShadow);
    $('h2').attr('style', secondShadow);
});

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