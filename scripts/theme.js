TOGGLE_DARK.addEventListener("change", setThemeSettings);

function setThemeSettings() {
    if (TOGGLE_DARK.checked) {
        if (!document.body.classList.contains("dark-mode--body"))
            document.body.classList.add("dark-mode--body");

        if (!document.querySelector("nav").classList.add("dark-mode--text"))
            document.querySelector("nav").classList.contains("dark-mode--text");

        if (!document.querySelector(".introduction").classList.contains("dark-mode--text"))
            document.querySelector(".introduction").classList.add("dark-mode--text");

        if (!document.querySelector("main").classList.contains("dark-mode--main"))
            document.querySelector("main").classList.add("dark-mode--main");

        document
            .querySelectorAll(".bio a")
            .forEach((a) => !a.classList.contains("dark-mode--link") && a.classList.add("dark-mode--link"));

        document
            .querySelectorAll(".project__title")
            .forEach((p) => !p.classList.contains("dark-mode--link") && p.classList.add("dark-mode--text"));
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
            .forEach((p) => p.classList.remove("dark-mode--text"));
    }
}