document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const lastname = document.getElementById("lastname").value;
    const middlename = document.getElementById("middlename").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const dob = document.getElementById("dob").value;
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    axios.get("http://localhost:3000/people", {
        params: {
            login: login
        }
    })
        .then(function (response) {
            const users = response.data;
            const existingUser = users.find(user => user.login === login);

            if (existingUser) {
                document.getElementById("login").style.border = "1px solid red";
            } else {
                const user = {
                    username: username,
                    lastname: lastname,
                    middlename: middlename,
                    phone: phone,
                    email: email,
                    gender: gender,
                    country: country,
                    city: city,
                    dob: dob,
                    login: login,
                    password: password
                };

                axios.post("http://localhost:3000/people", user)
                    .then(function (res) {
                        console.log("Пользователь успешно зарегистрирован:", res.data);
                        // Добавьте свою логику для обработки успешной регистрации пользователя
                    })
                    .catch(function (error) {
                        console.error("Ошибка при отправке данных на сервер:", error);
                    });
            }
        })
        .catch(function (error) {
            console.error("Ошибка при выполнении GET-запроса:", error);
        });

});
