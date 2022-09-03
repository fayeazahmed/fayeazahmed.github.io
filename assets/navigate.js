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
    navigate(position);
    if (position === 1) changeMain();
  });
});

toggleDark.addEventListener("change", (e) => {
  document.body.style.color = e.target.checked ? "white" : "black"
  document.body.style.background = e.target.checked ? "linear-gradient(to right top, #060e00, #1b2c0f, #2f3200)" : "linear-gradient(to right top, #75ff7c, #9de069, #edf851)";
  const projectTypeText = document.querySelectorAll(".project__type")
  if (e.target.checked)
    projectTypeText.forEach(p => p.classList.add("text-white-50"))
  else
    projectTypeText.forEach(p => p.classList.remove("text-white-50"))
});
