document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Создаем объект с данными пользователя
    var user = {
      username: username,
      password: password
    };
  
    // Отправляем запрос на сервер для проверки данных пользователя
    axios.post("http://localhost:3000/people", user)
      .then(function(response) {
        // Проверка успешна, перенаправляем на страницу аккаунта
        window.location.href = "account.html?id=" + response.data.id;
      })
      .catch(function(error) {
        // Ошибка проверки, выводим сообщение об ошибке
        alert("Неверное имя пользователя или пароль. Попробуйте еще раз.");
        console.error("Ошибка проверки данных пользователя:", error);
      });
  });
  