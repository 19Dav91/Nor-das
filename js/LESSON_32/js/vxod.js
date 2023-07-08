const axios = require('axios');
import axios from 'axios';
console.log(require);
const username = 'правильное_имя_пользователя';
const password = 'правильный_пароль';

axios.get('http://localhost:3000/people', {
  params: {
    username: username,
    password: password
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Ошибка при выполнении GET-запроса:', error);
  });
