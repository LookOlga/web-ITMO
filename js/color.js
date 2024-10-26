'use strict'

const blocks = document.querySelectorAll('.block')
const colors = document.querySelectorAll('.color')
let currentColor = 'red'

colors.forEach(color => {
    color.addEventListener('click', function() {
        currentColor = this.getAttribute('data-color')
    })
})
blocks.forEach(block => {
    block.addEventListener('click', function() {
        this.style.backgroundColor = currentColor
    })
})