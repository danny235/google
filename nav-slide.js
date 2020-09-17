const menu = document.getElementById("menu");
const btn = document.getElementById("burger");


btn.addEventListener("click", () => {
    menu.style.display = "block";
    menu.classList.add("animationSlide");
});



document.addEventListener("click", (e) => {
    // console.log(`clientX:${e.clientX} clientY:${e.clientY}`);
    if((e.clientX) >= 264 && (e.clientY) >= 13) {
        menu.classList.remove("animationSlide");
            menu.style.display = "none";
    }
});