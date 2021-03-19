const NAV_BTNS = document.querySelectorAll(".nav .btn");
const SECTIONS = document.querySelectorAll(".spa");
const PROJECT_SECTIONS = document.querySelectorAll(".projects__sections")
const DP = document.querySelector(".dp");

function navigate(position) {
  NAV_BTNS.forEach((btn, i) => {
    if (i === position) btn.classList.add("--activated");
    else btn.classList.remove("--activated");
  });

  if (position === 0) {
    DP.classList.remove("dp--transformed");
    expandSection(-1)
  } else {
    DP.classList.add("dp--transformed");
  }

  SECTIONS.forEach((div, i) => {
    if (i === position) div.classList.add("page--activated");
    else div.classList.remove("page--activated");
  });
}

NAV_BTNS.forEach((button, position) => {
  button.addEventListener("click", () => navigate(position));
});

function expandSection(position) {
  PROJECT_SECTIONS.forEach((div, i) => {
    if (i === position) div.classList.toggle("projects__sections--activated");
    else div.classList.remove("projects__sections--activated");
  });
}

PROJECT_SECTIONS.forEach((div, position) => {
  div.querySelector("h4").addEventListener("click", () => expandSection(position));
});
navigate(1)