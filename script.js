// Variável de controle do loop
let condicao = true;

// Objeto que armazena o usuário cadastrado
let usuario = {
    nome: "",
    senha: ""
};

// Laço principal do sistema, que continua enquanto `condicao` for verdadeira
while (condicao) {
    // Exibe opções para o usuário e armazena a resposta
    let resposta = prompt("Bem-vindo caro usuário! O que deseja fazer em nosso sistema:\n1 - Cadastrar\n2 - Entrar\n3 - Sair");

    // Verifica se a resposta foi "cadastrar" ou 1
    if (resposta == "cadastrar" || resposta == "1") {
        let nomePrompt = prompt("Digite um nome bem legal:");

        // Verifica se o nome não está vazio
        if (nomePrompt != "") {
            let senhaPrompt = prompt("Digite sua melhor senha:");

            // Verifica se a senha não está vazia
            if (senhaPrompt != "") {
                // Armazena os dados no objeto `usuario`
                usuario.nome = nomePrompt;
                usuario.senha = senhaPrompt;

                alert("Seja bem-vindo ao nosso sistema, " + usuario.nome + "!");
            } else {
                alert("Digite alguma coisa no prompt para a senha!");
            }
        } else {
            alert("Digite alguma coisa no prompt para o nome!");
        }
    }

    // Verifica se a resposta foi "entrar" ou 2
    else if (resposta == "entrar" || resposta == "2") {
        let nomePrompt = prompt("Digite seu nome de usuário:");

        // Verifica se o nome inserido corresponde ao nome cadastrado
        if (nomePrompt == usuario.nome) {
            let senhaPrompt = prompt("Digite sua senha:");

            // Verifica se a senha está correta
            if (senhaPrompt == usuario.senha) {
                alert("Login realizado com sucesso! Bem-vindo de volta, " + usuario.nome + "!");
            } else {
                alert("Senha incorreta!");
            }
        } else {
            alert("Nome de usuário não encontrado em nosso banco!");
        }
    }

    // Verifica se a resposta foi "sair" ou 3
    else if (resposta == "sair" || resposta == "3") {
        alert("Até logo!");
        condicao = false; // Encerra o loop
    }

    // Caso o usuário digite algo inválido
    else {
        alert("Digite alguma das opções presentes no sistema!");
    }
}
