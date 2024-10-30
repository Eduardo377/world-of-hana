document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.querySelector(".input-with-icon img[alt='Hide password icon']");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email) {
            alert("Por favor, insira seu email.");
            emailInput.focus();
            return;
        }

        if (!password) {
            alert("Por favor, insira sua senha.");
            passwordInput.focus();
            return;
        }

        alert("Formulário enviado com sucesso!");
    });

    togglePassword.addEventListener("click", function() {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        this.src = type === "password" ? "../assets/hide.svg" : "../assets/show.svg";
    });
});