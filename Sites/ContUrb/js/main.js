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
        \n\nExistem atualmente ${contagemTot} autos aguardando AR.
        \n\Você achou os seguintes autos: ${autosAchados},
        \n\nVocê achou: ${autosAchados.length} autos,
        \n\Você procurou os seguintes autos: ${autosNaoAchados},
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
let contagemTot = (listaA().length + listaB().length + listaC().length + listaD().length + listaE().length
+ listaF().length + listaG().length + listaH().length + listaI().length + listaJ().length + listaK().length
+ listaL().length + listaM().length + listaN().length + listaO().length + listaP().length + listaQ().length
+ listaR().length + listaS().length + listaT().length + listaU().length + listaV().length + listaW().length
+ listaX().length + listaY().length + listaZ().length);

//Instânciamento
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
    let lista = [25938,36320,16444,5999,17883,38358,18882,33347,55812,42132,29093,55764,21246,4833,37880,54201,36259,45656,
        35752,60465,36358,67288,31391,18862,62680,16289,23493,60790,71550,62314,52249,25357,26760,34539,64936,59224,56745,
        71513,74226,120409,];
    return lista;
 }
 
function listaB(){
    let lista = [52598,12730,71725,61298,39153,];
    return lista;
 }

 function listaC(){
    let lista = [110719,67871,66811,20276,63968,115636,43415,60677,17711,46594,30819,108175,
        5393,67704,83771,83768,83765,7097,53260,17712,34850,32507,32920,73064,
        40349,83053,111802,43945,9637,25076,7648,17939,33487,43551,];
    return lista;
}
 
function listaD(){
    let lista = [43380,46060,20340,9991,110323,
        5675,17362,108604,20186,10847,32059,42931,];
    return lista;
 }
 
function listaE(){
    let lista = [67965,43267,34554,36196,39662,2729,39047,45801,38655,26685,25786,75854,13902,43825,25047,61413,3661,
        24311,34305,18991,32327,48017,26219,115634,112864,109661,109263,111298,20321,119753,17352,28676,
        1940,30254,20303,46033,18994,38978,26086,45767,17870,71208,55777,2353,65151,39001,55770,];
    return lista;
 }
 
function listaF(){
    let lista = [30447,17376,45763,5655,73157,20422,2624,71781,32947,35683,41519,30571,19996,9506,
        22031,6753,9644,38370,16411,25509,20500,12087,10068,24946,45498,31224,37652,58824,
        60090,109304,109008,43470,109885,65520,56423,20496,33664,109234,];
    return lista;
 }
 
function listaG(){
    let lista = [67474,122793,49434,60294,26174,];
    return lista;
 }
 
function listaH(){
    let lista = [109041,108317,14535,5434,10166,44821,26532,37465,];
    return lista;
 }
 
function listaI(){
    let lista = [25725,45950,26280,64706,37252,26105,6152,109451,109453,108202,];
    return lista;
 }
 
function listaJ(){
    let lista = [39647,41407,33386,39336,25912,29250,109966,47775,123821,2468,26228,6365,15898,42639,40629,20475,39806,
        4746,59384,6085,10726,30121,52506,61410,5143,19026,4886,30787,34215,17154,2056,35247,120310,109121,116754,125399,
        61962,109456,109364,114352,109363,114140,116759,120452,19288,17261,114985,117666,32983,];
    return lista;
 }
 
function listaK(){
    let lista = [33834,6725,];
    return lista;
 }
 
function listaL(){
    let lista = [116172,67847,116256,114168,26144,41521,38452,60737,50790,63062,16086,31326,47201,108343,53964,
        39073,15947,55267,21965,68517,58687,116001,133256,103402,];
    return lista;
 }
 
function listaM(){
    let lista = [109076,63274,110912,120119,120253,110009,125348,120302,110771,39981,109083,45828,
        46297,28860,36200,63753,12914,24993,41786,32937,45829,16544,59054,31707,27433,13454,116354,16233,38337,
        56574,69849,15073,108925,36343,38959,113246,108403,52000,108647,25070,51977,26768,13371,21404,42874,
        120460,120459,115512,117274,67092,108174,109081,111996,115052,108650,110933,];
    return lista;
 }
 
function listaN(){
    let lista = [45166,43618,83807,33945,20847,120483,];
    return lista;
 }
 
function listaO(){
    let lista = [38368,52372,47755,];
    return lista;
 }
 
function listaP(){
    let lista = [123106,110217,20915,108665,15377,14516,48465,33333,37429,
        7069,23500,75554,137728,];
    return lista;
 }
 
function listaQ(){
    let lista = [66939,];
    return lista;
 }
 
function listaR(){
    let lista = [109703,109590,120243,46630,32442,21307,41507,20541,31274,26846,89102,20611,108906,15247,63809,
        8793,21067,50744,9469,54088,62926,14610,38304,605,13426,67845,133269,15734,8922,26862,114708,20464,34111,
        46596,65156,13804,66782,25920,121479,46905,27503,75386,111729,63039,110772,117319,];
    return lista;
 }
 
function listaS(){
    let lista = [5943,23917,9720,3703,29784,6428,51904,20146,10832,8819,19353,70630,
        ,21707,8008,66248,110503,43827,109677,27455,25003,43814,108882,109211,110658,
        51515,22320,32740,108529,66256,117855,];
    return lista;
 }
 
function listaT(){
    let lista = [24065,29101,112201,67399,56514,124464,108951,];
    return lista;
 }
 
function listaU(){
    let lista = [];
    return lista;
 }
 
function listaV(){
    let lista = [16935,19731,123336,111645,30137,24154,13619,29385,26684,55988,];
    return lista;
 }
 
function listaW(){
    let lista = [75705,108198,37807,111438,108899,];
    return lista;
 }
 
function listaX(){
    let lista = [];
    return lista;
 }
 
function listaY(){
    let lista = [62347,46904,];
    return lista;
 }
 
function listaZ(){
    let lista = [29343,16837,];
    return lista;
 }
