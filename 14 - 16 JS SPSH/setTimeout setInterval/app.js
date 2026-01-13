// let i = 0
// const greeting = setInterval(() => {
//     alert("salom")
//     i++
//     if (i == 2) {
//         // clearInterval setIntervalni toxtatib beradi.
//         clearInterval(greeting)
//     }
// }, 3000)

const text = document.getElementById("text")
setTimeout(() => {
    text.textContent = "Xayr Laylo!"
}, 2000);