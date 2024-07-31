activateText = document.querySelector('#activate')

const text = "sudo apt-install rohan-gupta\nInstalling Portfolio...\n\nPress Return ⏎ or click anywhere to continue"
let index = 0

function typing() {
    if (index < text.length) {
        if (text.charAt(index) == '\n') {
            activateText.innerHTML += '<br>'
            activateText.style.marginTop = '2rem'
        }
        else {
            activateText.innerHTML += text.charAt(index)
        }
        index++
        setTimeout(typing, 100)
    }
}

typing()


document.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        glitchIn();
    }
})
document.addEventListener('click', function (event) {
    glitchIn();
})
