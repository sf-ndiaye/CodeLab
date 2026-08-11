// --- Menu responsive ---
const nav = document.querySelector("header nav");
const menuBtn = document.createElement("button");
menuBtn.textContent = "☰";
menuBtn.style.fontSize = "1.5rem";
menuBtn.style.background = "transparent";
menuBtn.style.border = "none";
menuBtn.style.color = "white";
menuBtn.style.cursor = "pointer";

// Ajout du bouton dans le header
nav.insertBefore(menuBtn, nav.firstChild);

// Action : ouvrir/fermer le menu
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// --- Dark/Light mode ---
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙";
toggleBtn.style.marginLeft = "1rem";
toggleBtn.style.background = "transparent";
toggleBtn.style.border = "none";
toggleBtn.style.color = "white";
toggleBtn.style.cursor = "pointer";

// Ajout du bouton dans le header
nav.appendChild(toggleBtn);

// Action : basculer entre clair et sombre
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.documentElement.style.setProperty("--background-color", "#222");
    document.documentElement.style.setProperty("--secondary-color", "#f9f9f9");
    toggleBtn.textContent = "☀️";
  } else {
    document.documentElement.style.setProperty("--background-color", "#f9f9f9");
    document.documentElement.style.setProperty("--secondary-color", "#333");
    toggleBtn.textContent = "🌙";
  }
});
