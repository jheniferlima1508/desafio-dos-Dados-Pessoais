let condicacao = true;
let usuario = {
     nome:"",
     senha:""
}

while(condicao){
let resposta = prompt("Bem vindo caro usuario! O que deseja fazer em nosso sistema: \n1-cadrastar \n2-entrar \n3-sair")
if(resposta == "cadrastar" || resposta == 1){
    let nomePrompt = prompt("Digite um nome bem legal:")
    if(nomePrompt !=""){
        let senhaPrompt = prompt("Digite sua melhor senha:")
        if(senhaPrompt !=""){
            usuario.nome = nomePrompt
            usuario.senha =senhaPrompt
            alert("seja bem vindo ao nosso sistema" + usuario.nome)
           }else{
            alert("digite alguma coisa no prompt!")
            
           }
        }else{
            alert("digite alguma coisa no prompt!")
        
    }
}
else if(resposta == "entrar" || resposta == 2){
    let nomePrompt = prompt("digite seu nome de usuario")
    if (nomePrompt == usuario.nome){
        let senhaPrompt = prompt("digite sua senha:")
        if(senhaPrompt == usuario.senha){
            alert("senha de usuario não encontrado em nosso banco!")

        }
           
    }else{
        alert("nome de usuario não encontrado em nosso banco!")
    }
}
else if (resposta == "sair" || resposta == 3){
    alert("até logo!")
    condicao = false
}
else{
    alert("digite alguma das opções presentes no sistema")
}
}