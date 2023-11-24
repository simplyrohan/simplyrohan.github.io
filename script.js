text_start = "I'm Rohan Gupta";

header = document.getElementById("header");

for (let element of document.getElementsByClassName("fill")) {
    let text = element.innerText;
    element.innerHTML = "";
    let text_element = document.createElement("span");
    text_element.innerHTML = text;
    element.appendChild(text_element);

    let ink = document.createElement("span");
    ink.className = "ink";
    element.appendChild(ink);

    element.addEventListener("mouseenter", (e) => {
        let x = e.clientX - element.getBoundingClientRect().left;
        let y = e.clientY - element.getBoundingClientRect().top;
        ink.style.left = x + "px";
        ink.style.top = y + "px";
        ink.style.animation = "fill 0.7s ease-in-out forwards";
    });
    element.addEventListener("mouseleave", (e) => {
        let x = e.clientX - element.getBoundingClientRect().left;
        let y = e.clientY - element.getBoundingClientRect().top;
        ink.style.left = x + "px";
        ink.style.top = y + "px";
        ink.style.animation = "unfill 1.2s ease-in-out forwards";
    });
}

i = 0;
function type() {
    if (i < text_start.length) {
        header.innerHTML += text_start.charAt(i);
        i++;
        setTimeout(type, 150);
    }
}


type()