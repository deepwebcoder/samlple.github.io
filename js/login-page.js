const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "barog") {
				window.location = "box1.html";

		//window.location = "https://deepwebcoder.github.io/pkweb/box1.html";
        //alert("You have successfully logged in.");
        //location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
