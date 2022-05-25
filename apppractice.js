const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    if (h1.style.color === "blue"){
        h1.style.color = "tomato";
    } else {
        h1.style.color = "blue";
    }
}

h1.addEventListener ("click", handleTitleClick);
