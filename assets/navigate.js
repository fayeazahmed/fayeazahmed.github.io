const NAV_BTNS = document.querySelectorAll(".nav .btn");
const SECTIONS = document.querySelectorAll(".spa");

function navigate(position) {
  NAV_BTNS.forEach((btn, i) => {
    if (i === position) btn.classList.add("--activated");
    else btn.classList.remove("--activated");
  });
  SECTIONS.forEach((div, i) => {
    if (i === position) div.classList.add("page--activated");
    else div.classList.remove("page--activated");
  });
}

NAV_BTNS.forEach((button, position) => {
  button.addEventListener("click", () => {
    navigate(position)
    if(position === 1) changeMain()
  });
});