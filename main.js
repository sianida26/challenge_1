import './src/css/tailwind.css'

import {
  mobileMenuClose,
  mobileMenuOpen,
} from './src/js/header.js'

document.querySelector('#mobile-menu-toggler').addEventListener('click', mobileMenuOpen)
document.querySelector('#mobile-menu-close').addEventListener('click', mobileMenuClose)