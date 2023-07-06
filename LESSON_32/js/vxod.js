document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Assuming you have an input field with id "userId" where the user enters the desired user ID
  const user = document.getElementById('user').value;

  axios.get(`http://localhost:3000/people/${user}`)
    .then(function (response) {
      const userData = response.data; // Assuming the response contains data for a single user
      console.log(userData);

      // Perform further actions with the user data here
    })
    .catch(function (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
    });
});





// document.getElementById('loginForm').addEventListener('submit', function (event) {
//   event.preventDefault();


 
//   axios.get('http://localhost:3000/people')
//     .then(function (response) {
//       const data = response.data;
//       console.log(data);

      
//     })
//     .catch(function (error) {
//       console.error('Ошибка при отправке данных на сервер:', error);
//     });
// });
// if (data.success) {
      //   console.log('Пользователь вошел в систему:', data.data.people);
      // } else {
      //   console.log('Ошибка входа:', data.message);
      // }