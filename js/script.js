const all = document.querySelector(".all");
const images = document.querySelector(".images");
const allH3 = document.querySelector(".allH3");
const imagesH3 = document.querySelector(".imagesH3");
const active = document.querySelector(".active");

document.addEventListener('DOMContentLoaded', () => {
    allH3.classList.add("active");
});

all.addEventListener("click", () => {
    allH3.classList.add("active");
    allH3.classList.add("active");
    imagesH3.classList.remove("active");
});

images.addEventListener("click", () => {
    imagesH3.classList.add("active");
    allH3.classList.remove("active");
});
