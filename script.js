const btnLogin = document.getElementById("btn-login");
const btnRegister = document.getElementById("btn-register");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// switch tab
if (btnLogin && btnRegister) {
  btnLogin.onclick = () => {
    btnLogin.classList.add("active");
    btnRegister.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
  };

  btnRegister.onclick = () => {
    btnRegister.classList.add("active");
    btnLogin.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
  };
}

// register
if (registerForm) {
  registerForm.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const pass = document.getElementById("reg-password").value;

    localStorage.setItem("user", JSON.stringify({name,email,pass}));
    alert("Register berhasil! Anda otomatis login.");
    window.location.href = "shop.html";
  };
}

// login
if (loginForm) {
  loginForm.onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const pass = document.getElementById("login-password").value;

    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.email === email && user.pass === pass){
      alert("Login berhasil!");
      window.location.href = "shop.html";
    } else {
      alert("Login gagal. Silakan cek email/password.");
    }
  };
}
