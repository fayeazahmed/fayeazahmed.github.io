const NAV_BTNS = document.querySelectorAll(".navBtn");
const SECTIONS = document.querySelectorAll(".spa");

function navigate(position) {
  NAV_BTNS.forEach((btn, i) => {
    if (i === position) btn.classList.add("navBtn--activated");
    else btn.classList.remove("navBtn--activated");
  });
  SECTIONS.forEach((div, i) => {
    if (i === position) div.classList.add("page--activated");
    else div.classList.remove("page--activated");
  });
}

NAV_BTNS.forEach((button, position) => {
  button.addEventListener("click", () => {
    navigate(position);
    changeMain(position);
  });
});
