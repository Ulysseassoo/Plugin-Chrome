let navbar = document.querySelector("#__next > div.styles_header__2LI5z")
let nextDiv = document.querySelector("#__next")
let body = document.querySelector("body")

const toggle = `
        <input id="toggle" type="checkbox" class="label__input" />
        <label class="label toggle" for="toggle">
            <div class="label__circle"></div>
        </label>
    `
const div = document.createElement("div")
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

navbar.appendChild(div)
