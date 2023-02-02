const MAIN = document.querySelector(".content")
const HEADERS = document.querySelectorAll(".navigation__header")
const toggleDark = document.getElementById("darkmode");
const P_INDEX = 2;
let selectedSection = "featured"
let DATA
fetch("/assets/data/projects.json").then(res => res.json().then(res => DATA = res))

HEADERS?.forEach(item => {
    item.addEventListener("click", (e) => {
        selectedSection = e.target.getAttribute("key")
        changeMain(P_INDEX)
    })
})

const clearMain = () => MAIN.innerHTML = ""

const placeContent = () => {
    switch (selectedSection) {
        case "featured":
            renderInMain(DATA.filter(item => item.featured))
            break;
        default:
            renderInMain(DATA)
            break;
    }
}

const changeNav = () => HEADERS?.forEach(item => {
    if (item.getAttribute("key") === selectedSection) item.classList.add("navigation__header--active")
    else item.classList.remove("navigation__header--active")
})

const changeMain = (position) => {
    clearMain()
    changeNav()
    if (position === 2)
        placeContent()
}

const renderInMain = elements => elements.forEach(item => {
    const div = document.createElement("div")
    div.classList.add("project")
    div.innerHTML = `
        <div class="project__tech-img">
            ${getImages(item.image)}
        </div>
        <p class="project__title">${item.title}</p>
        <p class="project__type ${toggleDark.checked ? "text-white-50" : ""}">${item.section}</p>
        `
    div.addEventListener("click", () => renderProject(item.id))
    MAIN.appendChild(div)
})

const renderProject = pid => {
    const { image, ss, link, git, description } = DATA.find(item => item.id === pid)
    const div = document.createElement("div")
    div.classList.add("portfolio__project")
    div.appendChild(getBackButton())
    div.innerHTML += `
    <div class="portfolio__tech-img">
        ${getImages(image)}
    </div>
    <div class="portfolio__imgcontainer">
        <a href="${link}">
            <img
                class="portfolio__project-image"
                src="assets/projects/${ss}"
                alt="bloodlocator"
            />
        </a>
        <a
            class="portfolio__gitlink"
            href="${git}"
            ><span>
                Go to repository
                <i class="fa fa-github" aria-hidden="true"></i></span
        ></a>
    </div>
    <div class="portfolio__project-desc p-0">
        <p>
            ${description}
        </p>
    </div>
    `
    clearMain()
    MAIN.appendChild(div)
    document.querySelector(".backBtn").addEventListener("click", () => changeMain(P_INDEX))
}

const getBackButton = () => {
    const backBtn = document.createElement("div")
    backBtn.classList.add("backBtn")
    backBtn.innerHTML = `<i class="fa fa-2x fa-chevron-circle-left" aria-hidden="true"></i>`
    return backBtn
}

const getImages = images => {
    let response = ""
    images.forEach(item => response += `<img src="assets/projects/${item}" alt="${item}" />`)
    return response
}