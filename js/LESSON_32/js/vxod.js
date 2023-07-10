// // const axios = require('../../../node_modules/axios');
// import axios from '../../../node_modules/axios/dist';


document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const log = document.getElementById("log").value;
    const password = document.getElementById("password").value;
    const cllog = document.querySelector('.login-container');
    axios.get("http://localhost:3000/people", {
        params: {
            log: log,
            password: password
        }
    })
        .then(function (response) {
            const users = response.data;
            const filteredUsers = users.filter(user => user.log === log && user.password === password);
            if (filteredUsers.length > 0) {
                const modal = document.createElement('div');
                modal.className = 'modal';
                modal.innerHTML = `
    <div class="modal-content">
        <h2>User Information</h2>
        <ul id="userDetails"></ul>
    </div>
`;
                document.body.prepend(modal);
                modal.style.textAlign = 'center';
                modal.style.margin = '0 auto';
                modal.style.width = '350px'
                modal.style.display = 'block';
                const closeBtn = document.createElement('button');
                closeBtn.className = 'close';
                closeBtn.textContent = "close";
                cllog.style.display = 'none';
                modal.appendChild(closeBtn);
                let body = document.querySelector('body');
                body.style.backgroundColor = 'greenyellow';
                closeBtn.addEventListener('click', function () {
                    modal.style.display = 'none';
                    cllog.style.display = 'block';
                    location.reload()
                });
                const userDetails = document.getElementById('userDetails');
                for (const key in filteredUsers[0]) {
                    const li = document.createElement('li');
                    li.textContent = `${key}: ${filteredUsers[0][key]}`;
                    userDetails.appendChild(li);
                    li.style.fontSize = '35px';
                    li.style.listStyleType = 'none'

                }
                console.log("Пользователь найден:", filteredUsers[0]);
                document.getElementById("log").style.border = "1px solid green";
                document.getElementById("password").style.border = "1px solid green";
            } else {
                console.log("Пользователь не найден");
                document.getElementById("log").style.border = "1px solid red";
                document.getElementById("password").style.border = "1px solid red";
                alert('Դուք մուտքագրել եք սխալ մուտքանուն կամ գաղտնաբառ')
            }
        })
        .catch(function (error) {
            console.error("Ошибка при выполнении GET-запроса:", error);
        });
});
