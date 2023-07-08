const axios = require('axios');
// import axios from '../../../node_modules/axios/dist/axios.js';
axios.get(url, { params })
  .then(response => {
    // Обработка успешного ответа
    console.log(response.data);
  })
  .catch(error => {
    // Обработка ошибки
    console.error(error);
  });