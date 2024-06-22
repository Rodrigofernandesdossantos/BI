
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Credenciais fictícias para validação
    const validUsername = 'usuario';
    const validPassword = 'senha123';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === validUsername && password === validPassword) {
        // Redireciona para o link específico após a autenticação
        window.location.href = 'https://www.example.com';
    } else {
        // Exibe mensagem de erro se as credenciais estiverem incorretas
        errorMessage.textContent = 'Usuário ou senha incorretos';
    }
});
