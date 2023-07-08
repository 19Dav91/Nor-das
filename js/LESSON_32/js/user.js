// Получение параметров URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Отображение информации о пользователе
const userInfo = document.createElement('p');
userInfo.textContent = `Привет, ${username}!`;
document.body.appendChild(userInfo);
