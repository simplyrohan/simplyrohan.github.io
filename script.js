header = document.getElementById("header");

targettext = "simplyrohan"
i = 0;
function type() {
    if (i < targettext.length) {
        header.innerHTML += targettext.charAt(i);
        i++;
        setTimeout(type, 150);
    }
}
type()