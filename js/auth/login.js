import { apiService } from "../services/api-service.js";

export default function handleLoginForm() {
  const form = document.getElementById("login-form");
  const messageDiv = document.getElementById("login-message");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    messageDiv.innerHTML = "";
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      messageDiv.innerHTML =
        '<div style="color: red;">Please enter both email and password.</div>';
      return;
    }
    try {
      const result = await apiService.login({ email, password });
      // Save name and accessToken in localStorage
      localStorage.setItem("userName", result.data.name);
      localStorage.setItem("accessToken", result.data.accessToken);
      messageDiv.innerHTML =
        '<div style="color: green;">Login successful!</div>';
      form.reset();
    } catch (error) {
      messageDiv.innerHTML = `<div style='color: red;'>${error.error || "Login failed. Please try again."}</div>`;
    }
  });
}
