const student = [
    {
        name: "Laylo",
        age: 16,
        country: "Uzbekistan",
        isStudent: true,
        // greeting() {
        //     console.log("Hello ", "Madi");
        // }
        greeting: function () {
            console.log("Salom mening ismim " + this.name);
        }
    },
    {
        name: "Madi",
        age: 16,
        country: "Uzbekistan",
        isStudent: true,
        // greeting() {
        //     console.log("Hello ", "Madi");
        // }
        greeting: function () {
            console.log("Salom mening ismim " + this.name);
        }
    },
    {
        name: "Madi",
        age: 16,
        country: "Uzbekistan",
        isStudent: true,
        // greeting() {
        //     console.log("Hello ", "Madi");
        // }
        // arrov functionda this ishlamidi va name ko'rinmidi
        greeting: () => {
            console.log("Salom mening ismim " + this.name);
        }
    }
]
student.forEach(s => s.greeting());
console.log(student[0].name = "Jamol");
console.log(student[0].bithday = "10.2.2000");



