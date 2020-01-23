const body = document.querySelector("body");

function contrastPageOn() {
  if (!body.classList.contains("invert")) {
    body.classList.add("invert");
  }
}
function contrastPageOff() {
  body.classList.remove("invert");
}

function fontSize(size) {
  body.style.fontSize = `${size}rem`;
}

function navTab(evt, id) {
  const section = document.querySelectorAll(".car-info__section");
  const tab = document.querySelectorAll(".car-info__item");

  section.forEach(i => {
    if (!i.classList.contains("hidden")) {
      i.classList.add("hidden");
    }
  });

  tab.forEach(i => {
    i.classList.remove("car-info__item--active");
  });

  document.getElementById(id).classList.remove("hidden");
  evt.currentTarget.classList.add("car-info__item--active");
}

// function updateCarColor(value) {
//   const elm = document.querySelector(".car-info__vehicle");
//   let img = "";
//   img = `<img src="./images/${value}.png" alt="car-${value}" />`;
//   elm.innerHTML = img;
// }

// navTab(event, "#car-info__section-1");
// updateCarColor("Silver");

function updateCarColor(id) {
  //   const carSwatch = document.querySelectorAll(".color-picker input");
  const carImg = document.querySelectorAll(".car-info__vehicle img");

  carImg.forEach(i => {
    if (!i.classList.contains("hidden")) {
      i.classList.add("hidden");
    }
  });

  document.getElementById(id).classList.remove("hidden");

  //   if (!carImg.classList.contains("hidden")) {
  //     carImg.classList.add("hidden");
  //   } else {
  //     carImg.classList.remove("hidden");
  //   }
}

new Glide(".glide").mount();

updateCarColor("vehicle-silver");
