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

TOGGLE_DARK.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.classList.add("dark-mode--body");
    document.querySelector("nav").classList.add("dark-mode--text");
    document.querySelector(".introduction").classList.add("dark-mode--text");
    document.querySelector("main").classList.add("dark-mode--main");
    document
      .querySelectorAll(".bio a")
      .forEach((a) => a.classList.add("dark-mode--link"));
    document
      .querySelectorAll(".project__title")
      .forEach((p) => p.classList.add("dark-mode--text"));
  } else {
    document.body.classList.remove("dark-mode--body");
    document.querySelector("nav").classList.remove("dark-mode--text");
    document.querySelector(".introduction").classList.remove("dark-mode--text");
    document.querySelector("main").classList.remove("dark-mode--main");
    document
      .querySelectorAll(".bio a")
      .forEach((a) => a.classList.remove("dark-mode--link"));
    document
      .querySelectorAll(".project__title")
      .forEach((p) => p.classList.remove("dark-modtextype"));
  }
});
