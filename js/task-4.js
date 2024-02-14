const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else { 
    const formData = {
      email: email.trim(),
      password: password.trim(),
    }
    console.log(formData);
  }
  loginForm.reset();
  }