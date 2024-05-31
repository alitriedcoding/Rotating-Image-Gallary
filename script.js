const Image_containerEl = document.querySelector(".image_container");
const nextEl = document.getElementById("next");
const preuseEl = document.getElementById("befor");


var timer;
var x = 0;
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearInterval(timer);
  uppdateimage();
});

preuseEl.addEventListener("click", () => {
  x = x + 45;
  clearInterval(timer);
  uppdateimage();
});

function uppdateimage() {
  Image_containerEl.style.transform = ` perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    x = x - 45;
    uppdateimage();
  }, 4000);
}
uppdateimage();


