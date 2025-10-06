const users = [
  { name: "Asad", login: "user1", password: "12345" },
  { name: "Erika", login: "user2", password: "12345" },
  { name:  "Kirill", login: "user3", password: "12345" },
  { name:  "Islam", login: "user4", password: "12345" },
  { name:  "Ilya", login: "user5", password: "12345" },
  { name: "Karina", login: "user6", password: "12345" }
];


const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const loginInput = document.getElementById("login").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  const user = users.find(u => 
    u.name === nameInput &&
    u.login === loginInput &&
    u.password === passwordInput
  );

  if (user) {
    localStorage.setItem("username", user.name);
    window.location.href = "index_2.html";
  } else {
    message.style.color = "red";
    message.textContent = "Ошибка: неверное имя, логин или пароль.";
  }
});
