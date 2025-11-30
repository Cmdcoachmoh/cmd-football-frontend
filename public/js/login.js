// login.js
// CMD Football Login Handler

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const status = document.getElementById("statusMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value;

    if (!username || !password) {
      status.textContent = "Please enter both username and password.";
      status.style.color = "red";
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const result = await response.json();

      if (result.success) {
        status.textContent = "✅ Login successful. Redirecting...";
        status.style.color = "green";
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      } else {
        status.textContent = "❌ Invalid credentials. Please try again.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "⚠️ Server error. Please try again later.";
      status.style.color = "red";
      console.error("Login error:", error);
    }
  });
});