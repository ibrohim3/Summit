// const baseURL = "http://localhost:8888/books"
const baseURL = "https://book-wqrz.onrender.com/books"

const productList = document.querySelector(".product-list");
const openForm = document.querySelector("#openForm");
const createModal = document.querySelector(".product-create");
const createBtn = document.querySelector(".create-btn");
const notif = document.querySelector(".notification");

// INPUTS
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const yearInput = document.querySelector("#year");
const imageInput = document.querySelector("#image");

// GET — fetch all books
function getAllBooks() {
    productList.innerHTML = "Loading...";

    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            productList.innerHTML = "";

            if (!data.length) {
                productList.innerHTML = "No books found";
                return;
            }

            data.forEach(book => {
                const div = document.createElement("div");
                div.className = "product";

                div.innerHTML = `
          <img src="${book.image}" alt="book" />
          <h3>${book.title}</h3>
          <p><b>${book.author}</b></p>
          <p>${book.year}</p>
        `;

                productList.appendChild(div);
            });
        })
        .catch(() => {
            productList.innerHTML = "Server error";
        });
}

// OPEN / CLOSE FORM
openForm.addEventListener("click", () => {
    createModal.classList.add("active");
});

createModal.addEventListener("click", (e) => {
    if (e.target === createModal) {
        createModal.classList.remove("active");
    }
});

// POST — create new book
createBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const year = yearInput.value.trim();
    const image = imageInput.value.trim();

    if (!title || !author || !year || !image) {
        showNotif("Fill all fields!", "red");
        return;
    }

    // LOADING START
    createBtn.textContent = "Creating...";
    createBtn.disabled = true;

    const newBook = { title, author, year, image };

    fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
    })
        .then(res => res.json())
        .then(() => {
            showNotif("Book created successfully!", "green");
            createModal.classList.remove("active");
            getAllBooks();
            clearInputs();
        })
        .catch(() => {
            showNotif("Server error!", "red");
        })
        .finally(() => {
            // LOADING END
            createBtn.textContent = 'Create';
            createBtn.disabled = false;
        });
});


//  HELPERS
function showNotif(text, color) {
    notif.textContent = text;
    notif.style.background = color;
    notif.style.display = "block";
    setTimeout(() => {
        notif.style.display = "none";
    }, 9000);
}

function clearInputs() {
    titleInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
    imageInput.value = "";
}

// INIT
getAllBooks();
