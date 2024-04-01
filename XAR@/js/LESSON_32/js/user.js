const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

const userInfo = document.createElement('p');
userInfo.textContent = `Привет, ${username}!`;
document.body.appendChild(userInfo);
