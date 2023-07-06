document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const dob = document.getElementById("dob").value;

    if (username && email && password) {
        alert("Регистрация успешно завершена. Добро пожаловать в нашу социальную сеть!");

        const user = {
            username: username,
            email: email,
            password: password,
            gender: gender,
            country: country,
            city: city,
            dob: dob
        };

        axios.post("http://localhost:3000/people", user)
            .then(function (res) {
                console.log(res);
            })
            .catch(function (error) {
                console.error("Ошибка при отправке данных на сервер:", error);
            });
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});
