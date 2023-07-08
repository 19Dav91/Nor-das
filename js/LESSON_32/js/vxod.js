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
                const modal = document.createElement('div');
                modal.className = 'modal';
                modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>User Information</h2>
        <ul id="userDetails"></ul>
    </div>
`;
                document.body.prepend(modal);
                modal.style.display = 'block';
                const closeBtn = modal.querySelector('.close');
                closeBtn.addEventListener('click', function () {
                    modal.style.display = 'none';
                });
                const userDetails = document.getElementById('userDetails');
                for (const key in filteredUsers[0]) {
                    const li = document.createElement('li');
                    li.textContent = `${key}: ${filteredUsers[0][key]}`;
                    userDetails.appendChild(li);
                }
                // let usr = window.location.href = ('user.html');
                // let p = document.createElement('p');
                // p.textContent = `Username: ${filteredUsers[0].username}, Email: ${filteredUsers[0].email}`;
                // document.body.appendChild(p)
                console.log("Пользователь найден:", filteredUsers[0]);
                document.getElementById("username").style.border = "1px solid green";
                document.getElementById("password").style.border = "1px solid green";
            } else {
                console.log("Пользователь не найден");
                document.getElementById("username").style.border = "1px solid red";
                document.getElementById("password").style.border = "1px solid red";
                alert('Դուք մուտքագրել եք սխալ մուտքանուն կամ գախտնաբառ')
            }
        })
        .catch(function (error) {
            console.error("Ошибка при выполнении GET-запроса:", error);
        });
});
