import { apiService } from "../../services/api-service.js";

const form = document.getElementById("login-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const result = await apiService.login({ email, password });
    document.getElementById("login-message").innerHTML =
      '<div style="color: green;">Login successful!</div>';
    localStorage.setItem("userName", result.data.name);
    localStorage.setItem("accessToken", result.data.accessToken);
  } catch (error) {
    console.error(error);
    document.getElementById("login-message").innerHTML =
      `<div style='color: red;'>${error.error || "Login failed. Please try again."}</div>`;
  }
});
