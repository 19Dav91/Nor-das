const axios = require('axios/dist/browser/axios.cjs');
const axios1 = require('axios/dist/node/axios.cjs');
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
  // mkdir axios-get-examples
  // cd axios-get-examples
  // npm init -y
  // npm install axios