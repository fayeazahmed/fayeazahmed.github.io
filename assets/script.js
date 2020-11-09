//NAV SCRIPT

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

//FOOTER SCRIPT 
const FOOTER = document.querySelector("footer")

function scrollAppear()
{
	let footerPosition = FOOTER.getBoundingClientRect().top;
	let windowPosition = window.innerHeight / 1.2;

	if(footerPosition < windowPosition) {
		FOOTER.classList.add('scroll-animation');
	}
}

window.addEventListener('scroll', scrollAppear);