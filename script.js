activateText = document.querySelector('#activate')
glitchText = document.querySelector('.glitch')

const text = "sudo apt-install rohan-gupta\nInstalling Portfolio...\n\nPress Return ⏎ to continue"
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

// GLitch
glitchText = document.querySelector('.glitch')


const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"


function glitch() {
    glitchText.style.opacity = '1'
    l = 0;
    randomString = ''
    for (let i = 0; i < 8000; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    int = setInterval(() => {
        for (let i = 0; i < 200; i++) {
            ind = Math.floor(Math.random() * randomString.length)
            randomString = randomString.substring(0, ind) + chars.charAt(Math.floor(Math.random() * chars.length)) + randomString.substring(ind + 1)
        }
        glitchText.style.height = 'calc(+' + (Math.floor(l)) + 'px)'
        l += 1.2;
        // console.log(l)
        if (glitchText.offsetHeight >= document.body.offsetHeight) {
            clearInterval(int)
            window.location.href = '/portfolio.html'

        }
        // 
        // }
        glitchText.innerHTML = randomString
    }, 1)
}



document.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        glitch();
    }
})
document.addEventListener('click', function (event) {
    glitch();
})

mouseTrail = document.querySelector('#mouse-trail')

document.addEventListener('mousemove', function (event) {
    mouseTrail.style.left = 'calc(' + event.pageX + 'px - 1rem)'
    mouseTrail.style.top = 'calc(' + event.pageY + 'px - 1rem)'
    mouseTrail.style.opacity = '0.5'
})

document.addEventListener('mouseleave', function (event) {
    mouseTrail.style.opacity = '0'
})