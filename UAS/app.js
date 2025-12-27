// DATASET JSON LOKAL
const dataUser = [
  { username: "admin", password: "123", nama: "Administrator" },
  { username: "user",  password: "456", nama: "User Biasa" }
];

// CLASS OOP
class Login {
  constructor(users) {
    this.users = users;
  }

  cekUsername(username) {
    return this.users.find(u => u.username === username);
  }

  cekPassword(user, password) {
    return user.password === password;
  }
}

// OBJECT
const loginApp = new Login(dataUser);

// LOGIN
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = loginApp.cekUsername(username);
  if (!user) {
    alert("Username salah");
    return;
  }

  if (!loginApp.cekPassword(user, password)) {
    alert("Password salah");
    return;
  }

  // SIMPAN KE LOCAL STORAGE
  localStorage.setItem("login", "true");
  localStorage.setItem("username", user.username);
  localStorage.setItem("nama", user.nama);

  tampilDashboard(user.nama);
}

// TAMPIL DASHBOARD
function tampilDashboard(nama) {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("welcomeText").innerText =
    `Selamat datang kembali, ${nama} 👋`;
}

// LOGOUT
function logout() {
  localStorage.clear();
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}

// AUTO LOGIN JIKA ADA DATA DI LOCAL STORAGE
window.onload = function () {
  if (localStorage.getItem("login") === "true") {
    const nama = localStorage.getItem("nama");
    tampilDashboard(nama);
  }
};
