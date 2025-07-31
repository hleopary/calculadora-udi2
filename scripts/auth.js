// Usuarios hardcodeados (luego migraremos a localStorage)
const users = [
    { username: "admin", password: "paryszewski", role: "admin" },
    { username: "user", password: "1234", role: "user" }
    { username: "odontit", password: "1234", role: "user" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Validar credenciales
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Guardar sesión (simulada)
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        
        // Redirigir al dashboard
        window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = "Usuario o contraseña incorrectos";
    }
});