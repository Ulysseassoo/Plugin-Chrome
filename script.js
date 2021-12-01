// ----------------------------------- VARIABLES

let navbar = document.querySelector("#__next > div.styles_header__2LI5z")
let navbarTablet = document.querySelector("#__next > div.styles_header__1ZF6R")
let nextDiv = document.querySelector("#__next")
let body = document.querySelector("body")
let footer = document.querySelector("footer")
let lazyloaderContainers = document.querySelectorAll(".lazyload-wrapper")

const toggle = `
        <input id="toggle" type="checkbox" class="label__input" />
        <label class="label toggle" for="toggle">
            <div class="label__circle"></div>
        </label>
    `
const div = document.createElement("div")
const input = document.createElement("input")

// ------------------ FUNCTIONS

div.style.margin = "1rem"
div.innerHTML += toggle
console.log(div.childNodes[1])
div.childNodes[1].addEventListener("change", (e) => {
	nextDiv.classList.remove("darkmode")
	body.classList.remove("darkmode")
	if (e.target.checked) {
		nextDiv.classList.add("darkmode")
		body.classList.add("darkmode")
	}
})

input.type = "checkbox"
input.id = "button-easy"
input.addEventListener("change", (e) => {
	navbar.style.display = "flex"
	lazyloaderContainers.forEach((lazyloader) => {
		Array.from(lazyloader.getElementsByTagName("img")).forEach((element) => {
			element.style.display = ""
		})
	})
	Array.from(body.getElementsByTagName("img")).forEach((element) => {
		element.style.display = ""
	})
	Array.from(body.getElementsByTagName("video")).forEach((element) => {
		element.style.display = ""
	})
	if (footer) {
		footer.style.display = "flex"
	}

	if (e.target.checked) {
		navbar.style.display = "none"
		lazyloaderContainers.forEach((lazyloader) => {
			console.log(lazyloader)
			Array.from(lazyloader.getElementsByTagName("img")).forEach((element) => {
				element.style.display = "none"
			})
		})
		Array.from(body.getElementsByTagName("img")).forEach((element) => {
			element.style.display = "none"
		})
		Array.from(body.getElementsByTagName("video")).forEach((element) => {
			element.style.display = "none"
		})
		if (footer) {
			footer.style.display = "none"
		}
	}
})

if (window.matchMedia("(max-width: 1099px)").matches) {
	navbarTablet.appendChild(div)
} else {
	navbar.appendChild(div)
}
body.appendChild(input)
