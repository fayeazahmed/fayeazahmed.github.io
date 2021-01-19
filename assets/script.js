//NAV SCRIPT

const HOME_BTN = document.getElementById("nav-home");
const MAIN = document.getElementById("main");
HOME_BTN.addEventListener("click", () => (MAIN.scrollTop = 0));

//SCROLL SCRIPT

const SCROLLBAR = document.getElementById("scroll-bar");
const MAIN_HEIGHT = MAIN.scrollHeight;
const BIO = document.getElementById("bio");

MAIN.addEventListener("scroll", () => {
  const scrolledHeight = MAIN.scrollTop;
  let scrollBarHeight = (scrolledHeight / MAIN_HEIGHT) * 100;
  if (isElementInViewport(BIO)) {
    scrollBarHeight = 100;
  }
  SCROLLBAR.style.height = scrollBarHeight + "%";
  SCROLLBAR.style.top = scrolledHeight + "px";
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
