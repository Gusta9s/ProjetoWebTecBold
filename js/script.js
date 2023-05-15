function logar(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "Gustavo" && senha == "BoxCola123"){
        alert("Login autorizado, seja bem-vindo " + login + "!.");
        location.href = "index.html";
    }
    else{
        alert("Usuario ou senha invalidos!.")
    }
}

// Tarefas:
// 1° Pintar o X de branco.
// 2° Inserir o nome de usuario no HTML home, vindo do login...