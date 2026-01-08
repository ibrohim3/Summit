// fetch() — server yoki fayldan ma'lumot olish uchun ishlatiladi (HTTP so‘rov)

//  fetch('https://68fb5c6694ec96066025c8da.mockapi.io/products')  url ga so‘rov yuboryapmiz
fetch("https://myfakeapi.com/api/cars")

    // Serverdan kelgan javobni JS object formatga o‘tkazamiz
    .then(res => res.json()) // JSON -> JS Object

    // JS Object ga aylantirilgan ma'lumotni bu yerda ushlaymiz
    .then(data => {
        const cards = document.querySelector(".cards")
        data.forEach(item => {
            const card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = `
            <img src="${item.avatar}" alt="${item.name}">
            <h2>${item.name}</h2>
            <h3>${item.birthday}</h3>
        `
            cards.appendChild(card)
        })
    })

    // Agar xatolik bo‘lsa, shu yerda ushlanadi
    .catch((error) => {
        console.log("Xatolik: ", error.message);
    })