function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "ABCD" && pass === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard/";
  } else {
    document.getElementById("error").innerText = "Invalid credentials ❌";
  }
}

function protectPage() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "/";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "/";
}