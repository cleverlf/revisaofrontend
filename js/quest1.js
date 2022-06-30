var button = document.querySelector("button");
button.onclick = function () {
    var pergunta1 = prompt("Qual é o comando para iniciar o git?");
    
    if (pergunta1 == "git init" ) {
        alert("O " + pergunta1 + ", serve para iniciar o git. Parabéns você acertou!");
    }else if(pergunta1 == null || pergunta1 == ""){
        window.location("modulo1.html");
    } else {
        alert("Resposta incorreta, tente novamente!")
        window.location("modulo1.html");        
    }

    var pergunta2 = prompt("Qual é o comando para adicionar arquivos ao repositorio?");

    if (pergunta2 == "git add") {
        alert("O " + pergunta2 + ", serve para adicionar arquivos. Exemplos: git add \"index.html\", ou git add \".\" para adicionar todos os arquivos . Parabéns você acertou!");
    } else {
        alert("Resposta incorreta, tente novamente!")
        window.location("modulo1.html"); 
    }

    var pergunta3 = prompt("Qual é o comando para fazer um commit?");
    if (pergunta3 == "git commit") {
        alert("O " + pergunta3 + ", serve para fazer commit acompanhado de -m \"mensagem do commit\". Parabéns você acertou!");
    } else {
        alert("Resposta incorreta, tente novamente!")
        window.location("modulo1.html");
    }
    var pergunta4 = prompt("Qual é o comando para verificar o status do repositori?");
    if (pergunta4 == "git status") {
        alert("O " + pergunta4 + ", mostrará em qual ponto o seus repositorio se encontra, ou seja, vc saberá qual passo deve ser feito a seguir. Parabéns você acertou!");
    } else {
        alert("Resposta incorreta, tente novamente!")
        window.location("modulo1.html");
    }
    var pergunta5 = prompt("Qual é o comando para fazer o link do repositorio local com o repositorio remoto?");
    if (pergunta5 == "git remote add origin") {
        alert("O " + pergunta5 + ", + o link do seu repositorio remoto, fara o link dos dois repositorios. Parabéns você acertou!");
    } else {
        alert("Resposta incorreta, tente novamente!")
        window.location("modulo1.html");
    }
    var pergunta6 = prompt("Qual é o comando para buscar os arquivos do repositorio remoto para o repositorio local?");
    if (pergunta6 == "git pull") {
        alert("O " + pergunta6 + ", serve para puxar arquivos do repositorio remoto para seu repositorio local. Parabéns você acertou!");
    } else {
        alert("Resposta incorreta, tente novamente!")
        window.location("modulo1.html");
    }
    var pergunta7 = prompt("Qual é o comando para enviar os arquivos do repositorio local para o repositorio remoto?");
    if (pergunta7 == "git push") {
        alert("O " + pergunta7 + ", + \"-u origin main\" faz um upload do seu repositorio local para o repositorio remoto. Parabéns você acertou!");
    } else {
        alert("Resposta incorreta, tente novamente!")
        window.location("modulo1.html");
    }
    var pergunta8 = prompt("Qual é o comando para copiar um repositorio remoto para um novo repositorio local?");
    if (pergunta8 == "git clone") {
        alert("O " + pergunta8 + ", serve para clonar o repositorio remoto para um repositorio local. Parabéns você acertou!");
    } else {
        alert("Resposta incorreta, tente novamente!")
        window.location("modulo1.html");
    }
    var pergunta9 = prompt("Qual é o comando para para criar uma pasta local?");
    if (pergunta9 == "mkdir") {
        alert("O " + pergunta9 + ", serve criar uma pasta no seu repositorio local. Parabéns você acertou!");
    } else {
        alert("Resposta incorreta, tente novamente!")
        window.location("modulo1.html");
    }
    var pergunta10 = prompt("Qual é o comando para criar uma branch?");
    if (pergunta10 == "git branch") {
        alert("O " + pergunta10 + ", + \"o nome da branch\" criara uma branch no seu repositorio. Parabéns você acertou!");
    } else {
        alert("Resposta incorreta, tente novamente!")
        window.location("modulo1.html");
    }
    var pergunta11 = prompt("Qual é o comando para trocar de branch?");
    if (pergunta11 == "git checkout") {
        alert("O " + pergunta11 + ", + \"o nome da branch\". Parabéns você acertou!");
    } else {
        alert("Resposta incorreta, tente novamente!")
        window.location("modulo1.html");
    }
    var pergunta12 = prompt("Qual é o comando para para unir o conteudo de duas branchs?");

    if (pergunta12 == "git merge") {
        alert("O " + pergunta12 + ", serve unir duas branchs. Parabéns você acertou!");
    } else {
        alert("Resposta incorreta, tente novamente!")
        window.location("modulo1.html");
    }
}