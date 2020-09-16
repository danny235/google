const menu = document.getElementById("menu");
const btn = document.getElementById("burger");


btn.addEventListener("click", () => {
    menu.style.display = "block";
});

btn.addEventListener("blur", () => { 
    menu.style.display = "none";
});