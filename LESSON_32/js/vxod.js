// const axios = require('axios');
// import axios from 'axios';
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();


 
  axios.get('http://localhost:3000/people')
    .then(function (response) {
      const data = response.data;
      console.log(data);

      // if (data.success) {
      //   console.log('Пользователь вошел в систему:', data.data.people);
      // } else {
      //   console.log('Ошибка входа:', data.message);
      // }
    })
    .catch(function (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
    });
});
