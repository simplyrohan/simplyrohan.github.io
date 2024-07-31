activateText = document.querySelector('#activate')

const text = "sudo apt-install rohan-gupta\nInstalling Portfolio...\n\nPress Return ⏎ or click anywhere to continue"
let index = 0

let animationValid = true;

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
    if (animationValid) {
        if (event.key == 'Enter') {
            scrollDown()
        }
    }
})
document.addEventListener('click', function (event) {
    if (animationValid) {
        scrollDown()
    }
})

document.addEventListener('scroll', function (event) {
    // if the scroll position is near the top
    if (window.scrollY < 100) {
        animationValid = true
    }
    else {
        animationValid = false
    }
})


function scrollDown() {
    // viewport height
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    animationValid = false
}

profile = document.querySelector('.profile')

profile.addEventListener('click', function () {
    window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })
})