function receberDado() {

    //Declaração de variaveis da função
    let receber = document.querySelector("#valor_digitado");
    let valor = parseInt(receber.value);

    //Eventos
    //Evento obsoleto, trocar posteriormente.
    event.preventDefault();

    receber.addEventListener("keyup", function(event){
        if (event.keyCode === 13){
            event.preventDefault();
            document.getElementById("valor_digitado").click();
        }
    });

    //Condições
    if (valor === 0){
        document.getElementById("resultado").innerHTML = "<p>Os autos achados foram: " + autosAchados + "</p>"
        document.getElementById("resultado2").innerHTML = "<p>Os autos não achados foram: " + autosNaoAchados + "</p>"
    }

    else if (valor === listaRecA.find(itemLista => itemLista == valor)){
        let posicao = listaRecA.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista A";
    }

    else if (valor === listaRecB.find(itemLista => itemLista == valor)){
        let posicao = listaRecB.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista B";
    }

    else {
        if (valor > 1){
            autosNaoAchados.push(valor);
        }
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + "Não foi encontrado em nenhuma lista." ;
    }

}
//Variaveis globais
let autosNaoAchados = [];
let autosAchados = [];
let listaRecA = listaA();
let listaRecB = listaB();

//Funções para as listas
function listaA(){
    let lista = [1,2,3];
     return lista;
 }
 
function listaB(){
     let lista = [4,5,6];
     return lista;
 }
