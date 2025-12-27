// DATASET JSON LOKAL
const dataUser = [
  {
    username: "admin",
    password: "123",
    nama: "Admin Utama",
    level: "Administrator"
  },
  {
    username: "user",
    password: "456",
    nama: "User Biasa",
    level: "User"
  }
];

// CLASS OOP
class Login {
  constructor(data) {
    this.data = data;
  }

  cekLogin(username, password) {
    return this.data.find(
      u => u.username === username && u.password === password
    );
  }
}

// OBJECT
const loginApp = new Login(dataUser);

// LOGIN FUNCTION
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = loginApp.cekLogin(username, password);

  if (!user) {
    alert("salah login");
  } else {
    // sembunyikan login
    document.getElementById("loginPage").style.display = "none";

    // tampilkan info user
    document.getElementById("infoPage").style.display = "block";

    document.getElementById("infoNama").innerText = "Nama : " + user.nama;
    document.getElementById("infoUsername").innerText = "Username : " + user.username;
    document.getElementById("infoLevel").innerText = "Level : " + user.level;
  }
}

// LOGOUT
function logout() {
  document.getElementById("infoPage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
