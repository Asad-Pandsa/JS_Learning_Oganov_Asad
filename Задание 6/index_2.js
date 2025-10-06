 const username = localStorage.getItem("username");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const logoutBtn = document.getElementById("logoutBtn");

    if (username) {
      welcomeMessage.textContent = `Привет, ${username}!`;
    } else {
      window.location.href = "index.html";
    }

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("username");
      window.location.href = "index_2.html";
    });