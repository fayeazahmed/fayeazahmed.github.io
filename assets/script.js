//CAROUSEL
const TECH_BTNS = document.querySelectorAll(".technologies__buttons");
const TECH_CONTAINER = document.querySelector(".technologies__container");
const TECH_PAGES = document.querySelectorAll(".portfolio__project");
const NAV_BTNS = document.querySelectorAll(".nav .btn");
const SECTIONS = document.querySelectorAll(".spa");
const CAROUSEL = document.querySelectorAll(".carousel-controller i");
const DP = document.querySelector(".dp");
let TECH_STACKED = true;
let nextPage = 0;

function changeCarousel(buttonPosition) {
  nextPage = buttonPosition + 1;
  TECH_BTNS.forEach((btn, i) => {
    if (i === buttonPosition) btn.classList.toggle("buttons--activated");
    else btn.classList.remove("buttons--activated");
  });

  TECH_PAGES.forEach((div, i) => {
    if (i === buttonPosition) div.classList.toggle("--activated");
    else div.classList.remove("--activated");
  });

  checkIfStacked(buttonPosition);
  checkIfNextPageExists();
}

function navigate(position) {
  NAV_BTNS.forEach((btn, i) => {
    if (i === position) btn.classList.add("--activated");
    else btn.classList.remove("--activated");
  });

  if (position === 0) {
    DP.classList.remove("dp--transformed");
    changeCarousel(69);
  } else {
    DP.classList.add("dp--transformed");
  }

  SECTIONS.forEach((div, i) => {
    if (i === position) div.classList.add("page--activated");
    else div.classList.remove("page--activated");
  });
}

TECH_BTNS.forEach((button, position) => {
  button.addEventListener("click", () => changeCarousel(position));
});

NAV_BTNS.forEach((button, position) => {
  button.addEventListener("click", () => navigate(position));
});

CAROUSEL.forEach((button, position) => {
  button.addEventListener("click", () => {
    if (position === 1 && nextPage < TECH_PAGES.length) {
      changeCarousel(nextPage);
    } else if (position === 0 && nextPage > 0) {
      changeCarousel(nextPage - 2);
    }
  });
});

function checkIfStacked(position) {
  if (TECH_PAGES[position]) {
    TECH_STACKED = TECH_PAGES[position].classList.contains("--activated")
      ? false
      : true;
  } else {
    TECH_STACKED = true;
  }
  TECH_STACKED
    ? TECH_CONTAINER.classList.remove("stacked")
    : TECH_CONTAINER.classList.add("stacked");
}

function checkIfNextPageExists() {
  if (nextPage === TECH_PAGES.length) {
    CAROUSEL[1].style.visibility = "hidden";
  } else if (nextPage === 0) {
    CAROUSEL[0].style.visibility = "hidden";
  } else {
    CAROUSEL.forEach((button) => (button.style.visibility = "visible"));
  }
}

// MAIN.addEventListener("scroll", () => {
//   const scrolledHeight = MAIN.scrollTop;
//   let scrollBarHeight = (scrolledHeight / MAIN_HEIGHT) * 100;
//   if (isElementInViewport(BIO)) {
//     scrollBarHeight = 100;
//   }
//   SCROLLBAR.style.height = scrollBarHeight + "%";
//   SCROLLBAR.style.top = scrolledHeight + "px";
// })
