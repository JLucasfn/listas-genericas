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
    if (valor === listaRecA.find(itemLista => itemLista == valor)){
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

    else if (valor === listaRecC.find(itemLista => itemLista == valor)){
        let posicao = listaRecC.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista C";
    }

    else if (valor === listaRecD.find(itemLista => itemLista == valor)){
        let posicao = listaRecD.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista D";
    }

    else if (valor === listaRecE.find(itemLista => itemLista == valor)){
        let posicao = listaRecE.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista E";
    }

    else if (valor === listaRecF.find(itemLista => itemLista == valor)){
        let posicao = listaRecF.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista F";
    }

    else if (valor === listaRecG.find(itemLista => itemLista == valor)){
        let posicao = listaRecG.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista G";
    }

    else if (valor === listaRecH.find(itemLista => itemLista == valor)){
        let posicao = listaRecH.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista H";
    }

    else if (valor === listaRecI.find(itemLista => itemLista == valor)){
        let posicao = listaRecI.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista I";
    }

    else if (valor === listaRecJ.find(itemLista => itemLista == valor)){
        let posicao = listaRecJ.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista J";
    }

    else if (valor === listaRecK.find(itemLista => itemLista == valor)){
        let posicao = listaRecK.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista K";
    }

    else if (valor === listaRecL.find(itemLista => itemLista == valor)){
        let posicao = listaRecL.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista L";
    }

    else if (valor === listaRecM.find(itemLista => itemLista == valor)){
        let posicao = listaRecM.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista M";
    }

    else if (valor === listaRecN.find(itemLista => itemLista == valor)){
        let posicao = listaRecN.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista N";
    }

    else if (valor === listaRecO.find(itemLista => itemLista == valor)){
        let posicao = listaRecO.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista O";
    }

    else if (valor === listaRecP.find(itemLista => itemLista == valor)){
        let posicao = listaRecP.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista P";
    }

    else if (valor === listaRecQ.find(itemLista => itemLista == valor)){
        let posicao = listaRecQ.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista Q";
    }

    else if (valor === listaRecR.find(itemLista => itemLista == valor)){
        let posicao = listaRecR.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista R";
    }

    else if (valor === listaRecS.find(itemLista => itemLista == valor)){
        let posicao = listaRecS.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista S";
    }

    else if (valor === listaRecT.find(itemLista => itemLista == valor)){
        let posicao = listaRecT.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista T";
    }

    else if (valor === listaRecU.find(itemLista => itemLista == valor)){
        let posicao = listaRecU.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista U";
    }

    else if (valor === listaRecV.find(itemLista => itemLista == valor)){
        let posicao = listaRecV.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista V";
    }

    else if (valor === listaRecW.find(itemLista => itemLista == valor)){
        let posicao = listaRecW.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista W";
    }

    else if (valor === listaRecX.find(itemLista => itemLista == valor)){
        let posicao = listaRecX.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista X";
    }

    else if (valor === listaRecY.find(itemLista => itemLista == valor)){
        let posicao = listaRecY.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista Y";
    }

    else if (valor === listaRecZ.find(itemLista => itemLista == valor)){
        let posicao = listaRecZ.indexOf(valor) + 1;
        autosAchados.push(valor);
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + 
        "Se encontra na posição "+ posicao +" da lista Z";
    }

    else {
        if (valor > 1){
            autosNaoAchados.push(valor);
        }
        document.getElementById("resultado").innerHTML = "<p>O auto: " + valor + "</p>" + "Não foi encontrado em nenhuma lista." ;
    }

}

//Função para gerar o PDF
function gerarPDF(){
    event.preventDefault(); 

    const date = new Date();
    const dataHora = date.getHours();
    const dataMin = date.getMinutes();
    const dataSeg = date.getSeconds();

    //Variavel para modelar como será o PDF
    var pageWidth = 8.5,
        lineHeight = 1.2,
        margin = 0.5,
        maxLineWidth = pageWidth - margin * 2,
        fontSize = 12,
        ptsPerInch = 72,
        oneLineHeight = (fontSize * lineHeight) / ptsPerInch,
        text = `${date}.\n\nSalvar este arquivo na pasta AR´s procurados.
        \n\nOs autos achados foram: ${autosAchados},
        \n\nVocê achou: ${autosAchados.length} autos,
        \n\nOs autos procurados foram: ${autosNaoAchados},
        \n\nVocê procurou: ${autosNaoAchados.length} autos.`

    doc = new jsPDF({
        unit: "in",
        lineHeight: lineHeight
    }).setProperties({ title: "Autos Procurados" });

    // splitTextToSize takes your string and turns it in to an array of strings,
    // each of which can be displayed within the specified maxLineWidth.
    var textLines = doc.setFont("Arial").setFontSize(fontSize).splitTextToSize(text, maxLineWidth);

    // doc.text can now add those lines easily; otherwise, it would have run text off the screen!
    doc.text(textLines, margin, margin + 2 * oneLineHeight);
    
    // salvar usando o momento que foi feito o download.
    doc.save(dataHora + 'H_' + dataMin + 'M_' + dataSeg + 's' + ' - autos' + '.pdf');
}

//Variaveis globais
let autosNaoAchados = [];
let autosAchados = [];
let listaRecA = listaA(); let listaRecN = listaN();
let listaRecB = listaB(); let listaRecO = listaO();
let listaRecC = listaC(); let listaRecP = listaP();
let listaRecD = listaD(); let listaRecQ = listaQ();
let listaRecE = listaE(); let listaRecR = listaR();
let listaRecF = listaF(); let listaRecS = listaS();
let listaRecG = listaG(); let listaRecT = listaT();
let listaRecH = listaH(); let listaRecU = listaU();
let listaRecI = listaI(); let listaRecV = listaV();
let listaRecJ = listaJ(); let listaRecW = listaW();
let listaRecK = listaK(); let listaRecX = listaX();
let listaRecL = listaL(); let listaRecY = listaY();
let listaRecM = listaM(); let listaRecZ = listaZ();

//Funções para as listas
//Posteriormente colocar em arquivo separado para melhor vizualização.
function listaA(){
    let lista = [];
    return lista;
 }
 
function listaB(){
    let lista = [];
    return lista;
 }

 function listaC(){
    let lista = [20425011601,53531,108251,28224,110906,13749,44054,59111,107931,21155,6523,63697,48779,122796,37485,116154,116442,48139,116020,
        41368,30747,30750,11365,24776,107973,29397,19418,2234,23216,67370,49241,31176,122775,33486,108201,112210,36694,113782,9196,116228,
        31907,53546,32136,31636,1537,36132,14729,121290,132285,45268,37118,50629,120025,108645,32015,70495,31613,28514,27665,26492,
        44160,5493,45851,22167,108536,12034,140135,20429021602,23350,111394,132533,61457,44278,37229,14843,147556,147556,140361,117301,116505,
        135339,41484,111566,
    ];
    return lista;
}
 
function listaD(){
    let lista = [];
    return lista;
 }
 
function listaE(){
    let lista = [];
    return lista;
 }
 
function listaF(){
    let lista = [];
    return lista;
 }
 
function listaG(){
    let lista = [];
    return lista;
 }
 
function listaH(){
    let lista = [];
    return lista;
 }
 
function listaI(){
    let lista = [];
    return lista;
 }
 
function listaJ(){
    let lista = [];
    return lista;
 }
 
function listaK(){
    let lista = [];
    return lista;
 }
 
function listaL(){
    let lista = [];
    return lista;
 }
 
function listaM(){
    let lista = [111017,28556,123124,40726,24922,62238,49065,111816,21029,57777,110210,54838,138323,43015121501,32611031502,14832,62145,60049,
        118102,47177,35509,38508,122820,33083,61619,21269,110212,42747,42537,34706,41078,67452,
        18196,111817,132429,192604051601,48115,65093,17955,49757,131388,24894,90673,43336,46361,33293,
];
    return lista;
 }
 
function listaN(){
    let lista = [];
    return lista;
 }
 
function listaO(){
    let lista = [];
    return lista;
 }
 
function listaP(){
    let lista = [];
    return lista;
 }
 
function listaQ(){
    let lista = [];
    return lista;
 }
 
function listaR(){
    let lista = [];
    return lista;
 }
 
function listaS(){
    let lista = [];
    return lista;
 }
 
function listaT(){
    let lista = [];
    return lista;
 }
 
function listaU(){
    let lista = [];
    return lista;
 }
 
function listaV(){
    let lista = [];
    return lista;
 }
 
function listaW(){
    let lista = [];
    return lista;
 }
 
function listaX(){
    let lista = [];
    return lista;
 }
 
function listaY(){
    let lista = [];
    return lista;
 }
 
function listaZ(){
    let lista = [];
    return lista;
 }
