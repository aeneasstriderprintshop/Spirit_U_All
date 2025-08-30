// app/main.js

document.addEventListener("DOMContentLoaded", () => {
  const message = document.createElement("p");
  message.textContent = "✅ JavaScript is working!";
  message.className = "mt-6 text-green-600 text-xl font-semibold";
  document.body.appendChild(message);
});
