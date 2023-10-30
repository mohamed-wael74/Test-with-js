let stars = document.querySelector(".stars");
let moon = document.querySelector(".moon");
let mountain3 = document.querySelector(".mountain3");
let mountain4 = document.querySelector(".mountain4");
let river = document.querySelector(".river");
let boat = document.querySelector(".boat");
let mountain7 = document.querySelector(".mountain7");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 3.4 + "px";
  mountain3.style.top = value * 2 + "px";
  mountain4.style.top = value * 1.5 + "px";
  river.style.top = value * 1.5 + "px";
  boat.style.top = value * 1.5 + "px";
  boat.style.left = value * 3 + "px";
  if (scrollY >= 67) {
    if (scrollY >= 125) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281,#10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016,#10001f)";
    }
  }
};
