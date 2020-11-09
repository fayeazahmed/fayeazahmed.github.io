const CONTACT = document.getElementById("contact")

function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
}

document.addEventListener("scroll", () => {
	if(isInViewport(CONTACT)) {
		document.querySelector("#nav-contact").classList.add("active")
		document.querySelector("#nav-home").classList.remove("active")
	} else {
		document.querySelector("#nav-home").classList.add("active")
		document.querySelector("#nav-contact").classList.remove("active")
	}
})