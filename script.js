const video = document.querySelector("video");
const list = document.querySelector(".js-list");
const arrowLeft = document.querySelector(".is-arrow-left");
const arrowRight = document.querySelector(".is-arrow-right");


const increment = 290 + 33; // largura do elemento + gap
arrowLeft.addEventListener("click", () => list.scrollLeft -= increment);
arrowRight.addEventListener("click", () => list.scrollLeft += increment);

controlsVideo.buttonMute.addEventListener("click", () => video.muted = controlsVideo.isMuted());