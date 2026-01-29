// 1)
// const input = document.querySelector("#username")
// const sendBtn = document.querySelector("#btn")
const container = document.querySelector(".container")
// sendBtn.addEventListener("click", () => {
//     if (!input.value) {
//         alert("Malumot kiritmading")
//     } else {
//         localStorage.setItem("username", input.value)
//     }
// })
// window.addEventListener("load", () => {
//     const inputValue = localStorage.getItem("username")
//     const h1 = document.createElement("h1")
//     h1.classList.add("text")
//     h1.textContent = inputValue
//     container.appendChild(h1)
// })

// 2)
// const input = document.querySelector("#color")
// input.addEventListener("input", () => {
//     localStorage.setItem("color", input.value)
//     document.body.style.backgroundColor = input.value
// })
// window.addEventListener("load", () => {
//     const saqlanganColor = localStorage.getItem("color")
//     if (saqlanganColor) input.value = saqlanganColor
//     document.body.style.backgroundColor = saqlanganColor
// })


// 3)
// const colorInput = document.querySelector("#changeColor")
// colorInput.addEventListener("input", () => {
//     const inputValue = colorInput.value
//     if (!inputValue) {
//         alert("Xali rang kiritmading")
//     } else {
//         document.body.style.backgroundColor = inputValue
//         localStorage.setItem("color", inputValue)
//     }
// })
// window.addEventListener("load", () => {
//     const saqlanganColor = localStorage.getItem("color")
//     document.body.style.backgroundColor = saqlanganColor
// })

// 4)
const form = document.querySelector("#form")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const btn = document.querySelector("#login")

let isLoggidIn = false
btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (username.value === "admin" && password.value === "1234") {
        isLoggidIn = true
        sessionStorage.setItem("isLoggidIn", isLoggidIn)
        const h1 = document.createElement("h1")
        h1.classList.add("h1")
        h1.textContent = "Muvaffaqiyatli kirildi"
        container.appendChild(h1)
    } else {
        isLoggidIn = false
        alert("Username or password error")
    }
})
window.addEventListener("load", () => {
    const login = sessionStorage.getItem("isLoggidIn")
    isLoggidIn = login
})