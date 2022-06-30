var button = document.querySelector("button");
button.onclick = function (){
    var pergunta1 = prompt("Como fazer um comentario?");
    if(pergunta1 == "<!-- -->"){
        alert("O " + pergunta1 + ", Define um comentário. Parabéns você acertou!");
    }else{
        alert("Resposta incorreta!")
        window.location("modulo1.html");
    }

    var pergunta2 = prompt("Qual tag é responsavel pelo conteudo da pagina?");
    if(pergunta2 == "<body>"){
        alert("O " + pergunta2 + ", Define o corpo da página. Parabéns você acertou!");
    }else{
        alert("Resposta incorreta!")
        window.location("modulo1.html");
    }

    var pergunta3 = prompt("Qual tag é responsavel pelas informacoes da pagina?");
    if(pergunta3 == "<head>"){
        alert("O " + pergunta3 + ", Define uma informação sobre o documento. Parabéns você acertou!");
    }else{
        alert("Resposta incorreta!")
        window.location("modulo1.html");
    }
    var pergunta4 = prompt("Qual tag cria um paragrafo?");
    if(pergunta4 == "<p>"){
        alert("O " + pergunta4 + ", Define um parágrafo. Parabéns você acertou!");
    }else{
        alert("Resposta incorreta!")
        window.location("modulo1.html");
    }
    var pergunta5 = prompt("Qual tag divide o conteudo em blocos?");
    if(pergunta5 == "<div>"){
        alert("O " + pergunta5 + ", Define uma seção no documento. Parabéns você acertou!");
    }else{
        alert("Resposta incorreta!")
        window.location("modulo1.html");
    }
    var pergunta6 = prompt("Qual tag é utilizada para links?");
    if(pergunta6 == "<a>"){
        alert("O " + pergunta6 + ", Define um hyperlink. Parabéns você acertou!");
    }else{
        alert("Resposta incorreta!")
        window.location("modulo1.html");
    }
}
