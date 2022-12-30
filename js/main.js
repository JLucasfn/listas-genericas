function receberDado() {

    //Declaração de variaveis
    let receber = document.querySelector("#valor_digitado");
    let valor = parseInt(receber.value);
    console.log(valor);

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

let autosNaoAchados = [];
let autosAchados = [];
let listaRecA = listaA();
let listaRecB = listaB();

function listaA(){
    let lista = [1,2,3,4,5];
     return lista;
 }
 
function listaB(){
     let lista = [6,7,8,9,10];
     return lista;
 }
 