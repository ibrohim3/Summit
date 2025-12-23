const form = document.getElementById("myForm")
const error = document.getElementById("error")
form.addEventListener("submit", (e) => {
    // preventDefault() submit bosilganda sahifa refresh bo'lib ketishini oldini oladi.
    e.preventDefault()

    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value

    if (!username || !password) {
        error.textContent = "Majburiy maydonlar to'ldirilmadi"
        error.style.color = "red"
        return
    } else {
        error.textContent = "login succes"
        error.style.color = "green"
    }
    console.log("username: ", username);
    console.log("password: ", password);
})