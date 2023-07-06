document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    function generateRandomId() {
        return uuid.v4();
    }
    const username = document.getElementById("username").value;
    const lastname = document.getElementById("lastname").value;
    const middlename = document.getElementById("middlename").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const dob = document.getElementById("dob").value;
    const randomId = generateRandomId();
    const user = {
        username: username,
        lastname: lastname,
        middlename: middlename,
        phone: phone,
        email: email,
        password: password,
        gender: gender,
        country: country,
        city: city,
        dob: dob,
        id: randomId
    };
    axios.post("http://localhost:3000/people", user)
        .then(function (res) {
            console.log(res);
        })
        .catch(function (error) {
            console.error("Ошибка при отправке данных на сервер:", error);
        });

});
