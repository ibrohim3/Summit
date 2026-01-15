// Saqlash
// localStorage.setItem("name", "Laylo");
// localStorage.setItem("age", 18);
// localStorage.setItem("location", "Namangan");
// localStorage.setItem("bithday", "2007-08-10");

// // O‘qish
// const name = localStorage.getItem("name");

// // O‘chirish
// localStorage.removeItem("name");

// // Hammasini o‘chirish
// localStorage.clear();


const usernameInput = document.getElementById("username");
const themeSelect = document.getElementById("theme");
const saveBtn = document.getElementById("save");

// Saqlash
saveBtn.addEventListener("click", () => {
    applyTheme(themeSelect.value);
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("theme", themeSelect.value);
});

// O‘qish (page load)
window.addEventListener("load", () => {
    const username = localStorage.getItem("username");
    const theme = localStorage.getItem("theme");

    if (username) usernameInput.value = username;
    if (theme) {
        themeSelect.value = theme;
        applyTheme(theme);
    }
});

function applyTheme(theme) {
    document.body.style.background =
        theme === "dark" ? "#111" : "#fff";
    document.body.style.color =
        theme === "dark" ? "#fff" : "#000";
}
