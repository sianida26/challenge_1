import './src/css/bootstrap.scss'
import './src/css/tailwind.css'
import './src/css/index.css'

import {
  mobileMenuClose,
  mobileMenuOpen,
} from './src/js/header.js'

import {
  playLeft,
  playRight,
} from './src/js/carousel.js'

import feather from 'feather-icons'

feather.replace() // Replace all feather icons with SVG

document.querySelector('#mobile-menu-toggler').addEventListener('click', mobileMenuOpen)
document.querySelector('#mobile-menu-close').addEventListener('click', mobileMenuClose)
document.querySelector('#carousel-left').addEventListener('click', playLeft)
document.querySelector('#carousel-right').addEventListener('click', playRight)
