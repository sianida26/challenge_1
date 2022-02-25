const figures = document.querySelectorAll('figure')
const controlLeft = document.getElementById('carousel-left')
const controlRight = document.getElementById('carousel-right')

let current = 0
let timeout = null;
let direction = false; //true = kanan; false = kiri

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