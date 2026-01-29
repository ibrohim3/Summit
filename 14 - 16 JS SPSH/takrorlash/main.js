// 1
// const user = 'Madi'
// localStorage.setItem("username", user)
// const saqlangan = localStorage.getItem("username")
// console.log(saqlangan);

// 2
// const user = 'Madi'
// localStorage.setItem("username", user)
// localStorage.removeItem("username")
// const saqlangan = localStorage.getItem("username")
// console.log(saqlangan);

// 3
// const users = {
//     name: "Ali",
//     city: "Tashkent",
//     age: 18
// }
// localStorage.setItem("user", JSON.stringify(users))
// const saqlangan = JSON.parse(localStorage.getItem("user"))
// console.log(saqlangan.name);

// 4
const student = {
    name: "Aziz",
    age: 19,
    city: "Namangan",
}
localStorage.setItem("student", JSON.stringify(student))
const saqlangan = JSON.parse(localStorage.getItem("student")) || "Malumot topilmadi"
console.log(saqlangan);
