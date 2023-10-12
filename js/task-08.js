const loginForm = document.querySelector('.login-form')
console.dir(loginForm);
loginForm.addEventListener('submit', onSubmit)
function onSubmit(event) { 
    event.preventDefault();
    const formData = {};
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if (email === "" || password === "") { 
        alert('Всі поля повинні бути заповнені')
        return;
    }
    formData.email = email
    formData.password = password
    console.dir(formData);
    loginForm.reset()
}







