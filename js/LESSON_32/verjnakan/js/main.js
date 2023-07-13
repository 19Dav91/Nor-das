// $('.form').find('input, textarea').on('keyup blur focus', function (e) {
  // import axios from "../axios-get-examples/node_modules/axios";
  const axios = require('axios');


//     const $this = $(this),
//         label = $this.prev('label');

//         if (e.type === 'keyup') {
//               if ($this.val() === '') {
//             label.removeClass('active highlight');
//           } else {
//             label.addClass('active highlight');
//           }
//       } else if (e.type === 'blur') {
//           if( $this.val() === '' ) {
//               label.removeClass('active highlight'); 
//               } else {
//               label.removeClass('highlight');   
//               }   
//       } else if (e.type === 'focus') {

//         if( $this.val() === '' ) {
//               label.removeClass('highlight'); 
//               } 
//         else if( $this.val() !== '' ) {
//               label.addClass('highlight');
//               }
//       }

//   });

// $('.tab a').on('click', function (e) {

//   e.preventDefault();

//   $(this).parent().addClass('active');
//   $(this).parent().siblings().removeClass('active');

//   target = $(this).attr('href');

//   $('.tab-content > div').not(target).hide();

//   $(target).fadeIn(600);

// });




document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const lastname = document.getElementById("lastname").value;
  const middlename = document.getElementById("middlename").value;
  // const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;
  const dob = document.getElementById("dob").value;
  const log = document.getElementById("log").value;
  const password = document.getElementById("password").value;

  axios.get("http://localhost:3000/people", {
    params: {
      log: log
    }
  })
    .then(function (response) {
      const users = response.data;
      const existingUser = users.find(user => user.log === log);

      if (existingUser) {
        document.getElementById("log").style.border = "1px solid red";
        alert("Пользователь с таким логином уже существует.");
      } else {
        const user = {
          username: username,
          lastname: lastname,
          middlename: middlename,
          // phone: phone,
          email: email,
          gender: gender,
          country: country,
          city: city,
          dob: dob,
          log: log,
          password: password
        };

        axios.post("http://localhost:3000/people", user)
          .then(function (res) {
            console.log("Пользователь успешно зарегистрирован:", res.data);
            location.reload()
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
