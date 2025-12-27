<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Login Web</title>

  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Segoe UI', Arial, sans-serif;
      background: linear-gradient(135deg, #74ebd5, #9face6);
    }

    .box {
      width: 320px;
      padding: 25px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      text-align: center;
    }

    h2 {
      margin-bottom: 15px;
      color: #333;
    }

    input {
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      border-radius: 6px;
      border: 1px solid #ccc;
      outline: none;
    }

    input:focus {
      border-color: #6c63ff;
    }

    button {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      background: #6c63ff;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 15px;
    }

    button:hover {
      background: #554fd8;
    }

    #infoUser {
      display: none;
    }

    .welcome {
      font-weight: bold;
      color: #6c63ff;
      margin-bottom: 15px;
    }

    .info {
      text-align: left;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <!-- LOGIN -->
  <div class="box" id="loginBox">
    <h2>Login</h2>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button onclick="login()">Masuk</button>
  </div>

  <!-- INFO USER -->
  <div class="box" id="infoUser">
    <p class="welcome" id="welcomeText"></p>
    <div class="info">
      <p id="nama"></p>
      <p id="user"></p>
      <p id="level"></p>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>
