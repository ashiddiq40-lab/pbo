// DATASET JSON LOKAL
const dataUser = [
  {
    username: "admin",
    password: "123",
    nama: "Administrator"
  },
  {
    username: "user",
    password: "456",
    nama: "User Biasa"
  }
];

// CLASS (OOP)
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

  // cek username dulu
  const user = loginApp.cekUsername(username);

  if (!user) {
    alert("Username salah");
    return;
  }

  // cek password
  if (!loginApp.cekPassword(user, password)) {
    alert("Password salah");
    return;
  }

  // LOGIN BERHASIL
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboard").style.display = "block";

  document.getElementById("welcomeText").innerText =
    `Selamat datang kembali, ${user.nama} 👋`;
}

// LOGOUT
function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}
