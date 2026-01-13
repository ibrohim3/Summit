const email = document.querySelector('.email');
const password = document.querySelector('.password');
const btn = document.querySelector('.login-btn');
const notif = document.querySelector('.notif');
const icon = document.querySelector('.i');

// | Belgi | Ma’nosi          | Misol            |
// | ----- | ---------------- | ---------------- |
// | .   | istalgan 1 belgi | h.t → hat, hot |
// | ^   | satr boshi       | ^Salom         |
// | $   | satr oxiri       | om$            |
// | \d  | raqam            | \d\d           |
// | \w  | harf/raqam/_     | \w+            |
// | +   | 1 yoki ko‘p      | a+             |
// | *   | 0 yoki ko‘p      | a*             |
// | ?   | 0 yoki 1         | a?             |
// | {n} | aniq son         | \d{4}          |


// const emailReg = /^salom\d\w{2,6}$/
// const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailReg = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const passReg = /^(?=.*[a-zA-Z])(?=.*\d).{6,12}$/;

btn.addEventListener('click', () => {
    const emailVal = email.value;
    const passVal = password.value;

    email.style.border = emailReg.test(emailVal)
        ? '2px solid green'
        : '2px solid red';

    password.style.border = passReg.test(passVal)
        ? '2px solid green'
        : '2px solid red';

    notif.style.display = 'none';

    const notif2 = setTimeout(() => {
        notif.style.display = 'block';
        if (emailReg.test(emailVal) && passReg.test(passVal)) {
            notif.style.background = 'green';
            notif.textContent = "To'g'ri kiritding!";
            localStorage.setItem('email', emailVal);
        } else {
            notif.style.background = 'red';
            notif.textContent = 'Email yoki parol xato!';
        }
    }, 100);
});

icon.addEventListener('click', () => {
    password.type =
        password.type === 'password' ? 'text' : 'password';
});
