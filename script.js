ink = document.querySelector('.ink')
button = document.querySelector('.button')

button.addEventListener('mousemove', (e) => {
    ink.style.top = e.clientY - button.getBoundingClientRect().y + "px"
    ink.style.left = e.clientX - button.getBoundingClientRect().x + "px"
})