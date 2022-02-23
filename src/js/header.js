
/**
 *  Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
 */

export const mobileMenuClose = () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.remove('opacity-100', 'scale-100')
    mobileMenu.classList.add('hidden', 'opacity-0', 'scale-95')
}

export const mobileMenuOpen = () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.add('opacity-100', 'scale-100')
    mobileMenu.classList.remove('hidden', 'opacity-0', 'scale-95')
}