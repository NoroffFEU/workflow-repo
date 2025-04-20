import { apiService } from "../../services/api-service.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

async function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const messageDiv = document.querySelector("#contact-message");
  messageDiv.innerHTML = "";

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    await apiService.submitContactForm(data);
    displayMessage(
      messageDiv,
      "success",
      "Thank you for your message. We will get back to you soon.",
    );
    form.reset();
  } catch (error) {
    displayMessage(
      messageDiv,
      "error",
      error.error || "Something went wrong. Please try again.",
    );
  }
}

export default function handleContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", handleContactSubmit);
}
