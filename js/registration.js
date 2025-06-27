 document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      localStorage.setItem("user", JSON.stringify({ name, email }));
      window.location.href = "main.html";
    });
  }
});