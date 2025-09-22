function toggleForm() {
  document.getElementById("loginForm").classList.toggle("hidden");
  document.getElementById("registerForm").classList.toggle("hidden");
}

// Register
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = {
    name: document.getElementById("regName").value,
    age: document.getElementById("regAge").value,
    email: document.getElementById("regEmail").value,
    password: document.getElementById("regPassword").value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Register berhasil! Silakan login.");
  toggleForm();
});

// Login
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    alert("Login berhasil!");
    window.location.href = "shop.html";
  } else {
    alert("Email atau password salah!");
  }
});
