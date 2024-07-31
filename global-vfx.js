glitchText = document.querySelector('.glitch')

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

var pw = window.innerWidth
var ph = window.innerHeight

var numchars = pw / 8 * ph / 16; // calculate the number of characters to fill the display

console.log(numchars)

function glitchOut() {
    glitchText.style.opacity = '1'
    l = 0;
    randomString = ''
    for (let i = 0; i < numchars; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    document.body.style.opacity = '1'
    int = setInterval(() => {
        for (let i = 0; i < 200; i++) {
            ind = Math.floor(Math.random() * randomString.length)
            randomString = randomString.substring(0, ind) + chars.charAt(Math.floor(Math.random() * chars.length)) + randomString.substring(ind + 1)
        }

        glitchText.style.height = 'calc(100% - ' + (Math.floor(l)) + 'px)'

        l += ph / 675;

        if (glitchText.offsetHeight <= 0) {
            clearInterval(int)
        }

        glitchText.innerHTML = randomString
    }, 1)
}


function glitchIn() {
    glitchText.style.opacity = '1'
    l = 0;
    randomString = ''
    for (let i = 0; i < numchars; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    int = setInterval(() => {
        for (let i = 0; i < 200; i++) {
            ind = Math.floor(Math.random() * randomString.length)
            randomString = randomString.substring(0, ind) + chars.charAt(Math.floor(Math.random() * chars.length)) + randomString.substring(ind + 1)
        }

        glitchText.style.height = 'calc(+' + (Math.floor(l)) + 'px)'
        l += ph / 675;

        if (glitchText.offsetHeight >= document.body.offsetHeight) {
            clearInterval(int)
            window.location.href = '/portfolio.html'

        }
        glitchText.innerHTML = randomString
    }, 1)
}

mouseTrail = document.querySelector('#mouse-trail')

document.addEventListener('mousemove', function (event) {
    mouseTrail.style.left = 'calc(' + event.pageX + 'px - 1rem)'
    mouseTrail.style.top = 'calc(' + event.pageY + 'px - 1rem)'
    mouseTrail.style.opacity = '0.5'
})

document.addEventListener('mouseleave', function (event) {
    mouseTrail.style.opacity = '0'
})