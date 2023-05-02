alert("vamos conhecer sobre vinho")

var pontos = 0; // Inicializa a pontuação como 0

// Faz as perguntas usando prompt e verifica as respostas
var resposta1 = prompt("Qual é a uva mais utilizada na produção de vinho tinto?").toLowerCase();
if (resposta1 == "cabernet sauvignon") {
  pontos++;
}

var resposta2 = prompt("Qual é a uva mais utilizada na produção de vinho branco?").toLowerCase();
if (resposta2 == "chardonnay") {
  pontos++;
}

var resposta3 = prompt("Qual é o país que produz mais vinho no mundo?").toLowerCase();
if (resposta3 == "itália") {
  pontos++;
}

var resposta4 = prompt("Qual é o principal país produtor de vinho da América do Sul?").toLowerCase();
if (resposta4 == "argentina") {
  pontos++;
}

var resposta5 = prompt("Qual é o principal componente do vinho do Porto?").toLowerCase();
if (resposta5 == "fortificante" || resposta5 == "aguardente") {
  pontos++;
}

var resposta6 = prompt("Qual é a região da França conhecida por produzir vinhos tintos de alta qualidade?").toLowerCase();
if (resposta6 == "bordeaux") {
  pontos++;
}

var resposta7 = prompt("Qual é a região da França conhecida por produzir vinhos brancos de alta qualidade?").toLowerCase();
if (resposta7 == "bourgogne" || resposta7 == "bourgogne (bourgogne-franche-comté)") {
  pontos++;
}

var resposta8 = prompt("Qual é a uva utilizada na produção do vinho doce de sobremesa Sauternes?").toLowerCase();
if (resposta8 == "semillon") {
  pontos++;
}

var resposta9 = prompt("Qual é a variedade de uva utilizada na produção de vinho espumante Champagne?").toLowerCase();
if (resposta9 == "chardonnay" || resposta9 == "pinot noir" || resposta9 == "pinot meunier") {
  pontos++;
}

var resposta10 = prompt("Qual é a uva mais utilizada na produção de vinho rosé?").toLowerCase();
if (resposta10 == "grenache" || resposta10 == "garnacha") {
  pontos++;
}

// Exibe a pontuação na tela
document.write('<div class="resultado"><h1>Sua pontuação foi: ' + pontos + ' pontos!</h1></div>');
