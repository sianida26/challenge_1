import anime from 'animejs/lib/anime.es.js';

const delay = 1000 //ms
const figures = document.querySelectorAll('figure')
const controlLeft = document.getElementById('carousel-left')
const controlRight = document.getElementById('carousel-right')

let current = 0
let timeout = null;
let direction = false; //true = kanan; false = kiri

const getTranslateX = (e) => {
    const style = window.getComputedStyle(e)
    const matrix = new WebKitCSSMatrix(style.transform)
    return matrix.m41
}

// const animation = anime({
//     targets: figures,
//     translateX: (e, i, l) => {
//         const width = e.clientWidth
//         // if (isKanan){
//         //     if (getTranslateX(e) === width*(l - (i)))
//         //         return -width * i
//         //     return '+='+width
//         // }

//         // if (i === 0) {
//             console.log(current)
//         // }
//         if (getTranslateX(e) === -width*(2+i))
//             return width * (l-i-3)
//         return [width*current, (width*current+1)]
//     },
//     // loop: true,
//     autoplay: false,
//     // delay: delay,
//     easing: 'easeInOutSine',
//     duration: (e, i, l) => {
//         const width = e.clientWidth
//         // if (isKanan){
//         //     if (getTranslateX(e) === width * (l - (i+2)))
//         //         return 0
//         //     return 750
//         // }
//         if (getTranslateX(e) === -width*(2+i))
//             return 0
//         return 750
//     },
//     complete : () => {
//         // if (direction){
//         //     figures.forEach(e => e.style.transform = `translate-x(${getTranslateX(e)}px`)
//         // }
//         // else{
//         //     figures.forEach(e => e.style.transform = `translate-x(${getTranslateX(e)}px)`)
//         // }
//         current++
//         console.log(current)
//     }
// })

//play carousel
export const play = () => {
    // animation.play()
}

export const playLeft = () => {
    if (direction) {
        direction = false
    }

    
    current = (current + 1) % figures.length

    const width = figures[0].clientWidth

    figures.forEach((e, i) => {

        if (current-1 === i || (current === 0 && i === figures.length-1)) {
            e.style.transform = `translateX(${width*(figures.length - i)}px)`
            e.style.transitionDuration = '0s'

        } else {

            e.style.transform = `translateX(${width * (current > i ? (figures.length - current) : (-current))}px)`
            e.style.transitionDuration = `750ms`
        }
    })

    //update classes
    controlLeft.classList.add('carousel-control-active')
    controlRight.classList.remove('carousel-control-active')
}

export const playRight = () => {
    clearTimeout(timeout)
    if (!direction) {
        // animation.reverse()
        direction = true
    }
    current = current === 0 ? figures.length - 1 : current - 1

    const width = figures[0].clientWidth

    figures.forEach((e, i) => {

        if (current === i) {
            e.style.transform = `translateX(${-width*(current)}px)`
            e.style.transitionDuration = '0s'
        } else {
            e.style.transform = `translateX(${width * (current > i ? (figures.length - current) : (-current))}px)`
            e.style.transitionDuration = `750ms`
        }
    })
    //update classes
    controlLeft.classList.remove('carousel-control-active')
    controlRight.classList.add('carousel-control-active')
}

export const reverse = () => {
    clearTimeout(timeout)
    // animation.reverse()
    play()
}