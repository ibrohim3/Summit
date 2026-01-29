// function sonlar() {
//     const num = Number(document.getElementById("kir").value)
//     const res = document.getElementById("res")
//     res.textContent = num % 2 === 0 ? "Juft son" : "toq son"
// }
// document.getElementById("button").addEventListener("click", sonlar)

// function rangalmashish() {
//     let box = document.querySelector(".box")
//     let btn = document.getElementById("btn")
//     btn.addEventListener("click", () => {
//         box.style.background = "black"
//     })
// }
// rangalmashish()


function kopayish() {
    let input = document.querySelector(".inputNumber")
    let natija = document.querySelector(".natijasi")

    input.addEventListener("input", () => {

        let result = input.value * 2
        natija.textContent = result

    })

}

kopayish()




