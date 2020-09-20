const menu = document.getElementById("menu");
const btn = document.getElementById("burger");


btn.addEventListener("click", () => {
    menu.style.display = "block";
    menu.classList.add("animationSlide");
    menu.classList.remove("animationRemove");
    menu.style.boxShadow = "0 10px 10px 400px rgba(163, 163, 163, 0.54)"
});



document.addEventListener("click", (e) => {
    // console.log(`clientX:${e.clientX} clientY:${e.clientY}`);
    if ((e.clientX) >= 264 && (e.clientY) >= 13) {
        menu.classList.remove("animationSlide");
        menu.classList.add("animationRemove");
        menu.style.boxShadow = "none";
    }
});