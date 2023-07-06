document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = {
    username: username,
    password: password
  };
  axios.get('http://localhost:3000/people')
    .then(function (response) {
      const data = response.data;
      if (data.success) {
        console.log('Пользователь вошел в систему:', data.user);
      } else {
        console.log('Ошибка входа:', data.message);
      }
    })
    .catch(function (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
    });
});
