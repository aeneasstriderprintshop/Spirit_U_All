// app/main.js

document.addEventListener("DOMContentLoaded", () => {
  const appDiv = document.createElement("div");
  appDiv.className = "mt-6 p-4 bg-white rounded-xl shadow-lg";
  appDiv.innerHTML = `
    <h2 class="text-xl font-semibold text-gray-800">✅ JavaScript is working!</h2>
    <p class="mt-2 text-gray-600">Your Spirit U All app is live on GitHub Pages.</p>
  `;
  document.body.appendChild(appDiv);
});
