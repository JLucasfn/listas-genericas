//Função principal
function receberDado() {
    let valor = parseInt(document.querySelector("#valor_digitado").value);
    let encontrado = false;
    
    for (let i = 0; i < listasRec.length; i++) {
      const lista = listasRec[i];
      //método que retorna uma String criada a partir de um conjunto de valores Unicode.
      const letra = String.fromCharCode(65 + i);
      const posicao = posicaoNaLista(lista, valor);
      
      if (posicao !== -1) {
        encontrado = true;
        valoresAchados.push(" " + valor);
        document.getElementById("resultado").textContent =
          "O valor: " + valor + " " +
          "Se encontra na posição " + posicao + " da lista " + letra;
        break;
      }
    }
    
    if (!encontrado) {
        if (valor >= 1){
        valoresNaoAchados.push(" " + valor);
        }
        document.getElementById("resultado").textContent =
        "O valor " + valor + " não foi encontrado em nenhuma das listas.";
    }
}

//Função para pesquisar o valor solicitado dentro das listas
function posicaoNaLista(lista, valor) {
    const posicao = lista.indexOf(valor);
    return posicao === -1 ? posicao : posicao + 1;
}

//Eventos
//Adicionar um ouvinte de evento "click" no botão "Pesquisar"
document.getElementById("receber_dado").addEventListener("click", function() {
    receberDado();
});

//Adicionar um ouvinte de evento "click" no botão "Baixar"
document.getElementById("gerar_pdf").addEventListener("click", function() {
    gerarPDF(contagemTot,valoresAchados,valoresNaoAchados);
});

//Adicionar um ouvinte de evento "keydown" nos campos de entrada
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (e.target.matches("#valor_digitado")) {
        receberDado();
        e.target.value = '';
        e.preventDefault();
      }
    }
});

//lista recebendo as funções para ser pesquisado na função principal
const listasRec = [
    ListasFunctions.listaA(), ListasFunctions.listaB(), ListasFunctions.listaC(), ListasFunctions.listaD(), ListasFunctions.listaE(),
    ListasFunctions.listaF(), ListasFunctions.listaG(), ListasFunctions.listaH(), ListasFunctions.listaI(), ListasFunctions.listaJ(),
    ListasFunctions.listaK(), ListasFunctions.listaL(), ListasFunctions.listaM(), ListasFunctions.listaN(), ListasFunctions.listaO(),
    ListasFunctions.listaP(), ListasFunctions.listaQ(), ListasFunctions.listaR(), ListasFunctions.listaS(), ListasFunctions.listaT(),
    ListasFunctions.listaU(), ListasFunctions.listaV(), ListasFunctions.listaW(), ListasFunctions.listaX(), ListasFunctions.listaY(),
    ListasFunctions.listaZ()
];

//Variaveis globais (foco no gerador de PDF)
let valoresNaoAchados = [];
let valoresAchados = [];
let contagemTot = listasRec.reduce((acc, lista) => acc + lista.length, 0);
