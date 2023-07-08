document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    axios.get("http://localhost:3000/people", {
        params: {
            username: username,
            password: password
        }
    })
        .then(function (response) {
            const users = response.data;
            const filteredUsers = users.filter(user => user.username === username && user.password === password);
            if (filteredUsers.length > 0) {
                console.log("Пользователь найден:", filteredUsers[0]);
            } else {
                console.log("Пользователь не найден");
            }
        })
        .catch(function (error) {
            console.error("Ошибка при выполнении GET-запроса:", error);
        });
});
