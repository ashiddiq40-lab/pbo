// DATASET JSON LOKAL
const dataUser = [
  {
    username: "admin",
    password: "123",
    nama: "Administrator",
    level: "Admin"
  },
  {
    username: "user",
    password: "456",
    nama: "User Biasa",
    level: "User"
  }
];

// CLASS (OOP)
class Login {
  constructor(users) {
    this.users = users;
  }

  cekLogin(username, password) {
    return this.users.find(
      u => u.username === username && u.password === password
    );
  }
}

// OBJECT
const loginApp = new Login(dataUser);

// FUNCTION LOGIN (pemanggil class)
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = loginApp.cekLogin(username, password);

  if (!user) {
    alert("salah login");
  } else {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("infoUser").style.display = "block";

    document.getElementById("nama").innerText = "Nama : " + user.nama;
    document.getElementById("user").innerText = "Username : " + user.username;
    document.getElementById("level").innerText = "Level : " + user.level;
  }
}
