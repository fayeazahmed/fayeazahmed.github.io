const TOGGLE_DARK = document.getElementById("darkmode");
const MAIN = document.querySelector(".projects")
let DATA
fetch("/assets/data/projects.json").then(res => res.json().then(res => DATA = res))

const clearMain = () => MAIN.innerHTML = ""

const changeMain = (position) => {
    clearMain()
    if (position === 2)
        renderInMain(DATA.filter(item => item.featured))
}

const changeNav = () => HEADERS?.forEach(item => {
    if (item.getAttribute("key") === selectedSection) item.classList.add("navigation__header--active")
    else item.classList.remove("navigation__header--active")
})

const renderInMain = elements => elements.forEach(item => {
    const div = document.createElement("div")
    div.classList.add("project")
    div.innerHTML = `
        <div class="project__tech-img">
            ${getImages(item.image)}
        </div>
        <p class="project__title">${item.title}</p>
        <p class="project__type ${TOGGLE_DARK.checked ? "text-white-50" : ""}">${item.section}</p>
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
                    src="assets/images/${ss}"
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
        <p class="portfolio__project-desc">
            ${description}
        </p>
    `
    clearMain()
    MAIN.appendChild(div)
    document.querySelector(".backBtn").addEventListener("click", () => changeMain(2))
}

const getBackButton = () => {
    const backBtn = document.createElement("div")
    backBtn.classList.add("backBtn")
    backBtn.innerHTML = `<i class="fa fa-2x fa-chevron-circle-left" aria-hidden="true"></i>`
    return backBtn
}

const getImages = images => {
    let response = ""
    images.forEach(item => response += `<img src="assets/images/${item}" alt="${item}" />`)
    return response
}

const joiningDate = new Date("2023-02-01"); // Year, month, day
const currentDate = new Date();
const monthsPassed = (currentDate.getFullYear() - joiningDate.getFullYear()) * 12 + (currentDate.getMonth() - joiningDate.getMonth());
document.querySelector(".careers__duration").textContent = monthsPassed + " mos"
