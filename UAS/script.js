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

// CLASS (OOP)
class Login {
  constructor(data) {
    this.data = data;
  }

  cek(username, password) {
    return this.data.find(
      u => u.username === username && u.password === password
    );
  }
}

// OBJECT
const loginApp = new Login(dataUser);

// FUNCTION LOGIN
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = loginApp.cek(username, password);

  if (user === undefined) {
    alert("salah login");
  } else {
    document.getElementById("hasil").innerHTML = `
      <h3>Login Berhasil</h3>
      <p>Nama : ${user.nama}</p>
      <p>Username : ${user.username}</p>
      <p>Level : ${user.level}</p>
    `;
  }
}
