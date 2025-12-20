// 1) classList bu elementga class qo'shadi olib tashlidi va tekshiradi.
// const button = document.querySelector(".button")
// const button2 = document.querySelector(".button2")
// const quti = document.querySelector("#quti")

// button.addEventListener("click", () => {
//     quti.classList.toggle("blue")
//     console.log(quti.classList.contains("blue"));
// })

// button2.addEventListener("click", () => {
//     quti.classList.remove("blue")
// })


// // 2) Element bosilganda ishlaydi.
// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     alert("Tugma bosildi");
// });


// 3)  Input ichiga yozilganda ishlaydi (har bir harfda).
// let input = document.getElementById("text");
// let p = document.getElementById("result");
// // const body = document.querySelector("body")

// input.addEventListener("input", () => {
//     p.textContent = input.value;
//     // body.classList.toggle("dark")
// });


// //4) Qiymat o‘zgartirilib, tashqariga bosilganda ishlaydi.
// let select = document.getElementById("lang");

// select.addEventListener("change", () => {
//     console.log(select.value);
// });


// //5) Sichqoncha element ustiga borganda ishlaydi.
// let box = document.getElementById("box");
// const body = document.querySelector("body")

// box.addEventListener("mouseover", () => {
//     box.style.backgroundColor = "yellow";
//     body.style.backgroundColor = "white"
// });

// //6) Sichqoncha elementdan chiqib ketganda ishlaydi.
// box.addEventListener("mouseout", () => {
//     box.style.backgroundColor = "white";
//     body.style.backgroundColor = "green"

// });


// //7) Dark/white
// const darkBtn = document.querySelector("#dark-btn")
// const body = document.querySelector("body")

// darkBtn.addEventListener("click", () => {
//     body.classList.toggle("dark")
//     if (darkBtn.textContent === "Dark") {
//         darkBtn.textContent = "White"
//     } else {
//         darkBtn.textContent = "Dark"
//     }
// })
