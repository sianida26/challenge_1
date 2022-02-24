import anime from 'animejs/lib/anime.es.js';

const delay = 1000 //ms
const figures = document.querySelectorAll('figure')
const controlLeft = document.getElementById('carousel-left')
const controlRight = document.getElementById('carousel-right')

let timeout = null;
let direction = false; //true = kanan; false = kiri

const getTranslateX = (e) => {
    const style = window.getComputedStyle(e)
    const matrix = new WebKitCSSMatrix(style.transform)
    return matrix.m41
}

const animation = anime({
    targets: figures,
    translateX: (e, i, l) => {
        const width = e.clientWidth
        // if (isKanan){
        //     if (getTranslateX(e) === width*(l - (i)))
        //         return -width * i
        //     return '+='+width
        // }

        if (getTranslateX(e) === -width*(2+i))
            return width * (l-i-3)
        return '-='+width
    },
    // loop: true,
    autoplay: false,
    // delay: delay,
    easing: 'easeInOutSine',
    duration: (e, i, l) => {
        const width = e.clientWidth
        // if (isKanan){
        //     if (getTranslateX(e) === width * (l - (i+2)))
        //         return 0
        //     return 750
        // }
        if (getTranslateX(e) === -width*(2+i))
            return 0
        return 750
    },
})

//play carousel
export const play = () => {
    animation.play()
    timeout = setTimeout(() => play(), 750 + delay)
}

export const playLeft = () => {
    clearTimeout(timeout)
    if (direction) {
        animation.reverse()
        direction = false
    }
    play()

    //update classes
    controlLeft.classList.add('carousel-control-active')
    controlRight.classList.remove('carousel-control-active')
}

export const playRight = () => {
    clearTimeout(timeout)
    if (!direction) {
        animation.reverse()
        direction = true
    }
    play()

    //update classes
    controlLeft.classList.remove('carousel-control-active')
    controlRight.classList.add('carousel-control-active')
}

export const reverse = () => {
    clearTimeout(timeout)
    animation.reverse()
    play()
}