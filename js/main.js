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
        document.getElementById("resultado").innerHTML = "<p>" + "Autos achados: " + autosAchados + "</p>" +
        "<p>" + "Autos não achados: " + autosNaoAchados + "</p>"
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
        text = date + ".\n\n" +
        "Salvar este arquivo na pasta AR´s procurados.\n\n" +
        "Os autos achados foram: " + autosAchados + "\n\n" +
        "Os autos procurados foram: " + autosNaoAchados

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
    let lista = [50295,20991,25938,36320,16444,5999,17883,38358,18882,33347,55812,42132,29093,55764,21246,4833,37880,54201,36259,45656,
        35752,60465,36358,67288,73680,31391,18862,20167,20920,35642,62680,16289,23493,60790,117312,109666,108512,108621,116769,124455,
        34130,54508,45502,35552,71550,58791,62314,52249,32940,25357,26760,72579,61630,69891,48638,112866,120487,
        71814,34539,64936,28142,16591,64391,62904,43269,63064,63952,41320,39194,59224,56745,66935,71513,74226,75713,120409,108879,61496,];
    return lista;
 }
 
function listaB(){
    let lista = [61381,52598,55266,63251,61197,12797,43035,7699,21823,12730,49467,49476,34642,12863,26692,15028,51768,71725,59280,110412,
        111847,61298,43463,39153,116715,];
    return lista;
 }

 function listaC(){
    let lista = [110719,67871,66811,20276,55660,7049,34238,38501,43402,63968,115636,43415,108320,42905,60677,17711,46594,30557,30819,108175,
        5393,15115,67704,83771,83768,83765,7097,30715,53260,17712,34850,42001,32507,37385,34650,32920,36167,108859,110974,37615,73064,118437,
        111962,40349,83053,111802,43945,9637,25076,7648,17939,33487,71419,70685,58604,24615,108235,43551,];
    return lista;
}
 
function listaD(){
    let lista = [36139,43380,25362,46060,42677,21731,42507,23603,25584,40648,122251,120466,125350,123179,109236,122713,20340,11394,9991,110323,
        5675,17362,108604,20186,19407,10847,32059,109267,47130,62925,62403,65503,42931,33085,];
    return lista;
 }
 
function listaE(){
    let lista = [67965,43267,34554,36196,39662,80262,60379,2729,39047,45801,38655,26685,25786,75854,13902,43825,25047,71391,61413,3661,
        24311,34305,18991,32327,48017,26219,115634,112864,109661,109263,109237,111298,20321,119753,25112,30231,48884,67083,17352,28676,
        1940,30254,26053,31266,13282,35629,41443,5115,31321,90880,20303,46033,18994,38978,26086,45767,62651,63548,34239,17870,
        71208,55777,65720,67499,63690,60065,53712,30754,20059,20844,114128,110748,56121,40621,43562,20571,109254,109256,112376,111423,
        137253,111352,108977,2353,16210,30441,14996,65151,39258,65204,32849,20577,61724,39001,55770,];
    return lista;
 }
 
function listaF(){
    let lista = [30447,21728,17376,45763,5655,73157,20422,13294,2624,67586,42237,15510,71781,32947,35683,41519,88460,30571,19996,9506,
        22031,6753,25494,9644,38370,16411,25509,20500,12087,10068,24946,113760,16727,48722,17111,45498,31224,37652,58824,62178,
        60090,109304,109978,109115,133955,110347,109206,109008,108482,125005,108866,43470,110932,123451,109065,125349,108555,108205,117724,125318,
        122769,116508,114207,120403,120404,120759,125306,109885,109012,119101,110123,125347,111425,108895,123062,110214,120463,116955,109986,123365,
        114147,122269,67750,65520,49792,71874,56423,20505,32319,20496,37265,37171,33664,30397,107963,109234,118719,];
    return lista;
 }
 
function listaG(){
    let lista = [38345,42384,15852,36176,67474,122793,49434,60294,19086,67705,67701,72589,63029,26174,83823,49086,];
    return lista;
 }
 
function listaH(){
    let lista = [144956,112275,109041,114141,109037,123753,108317,116755,123785,14535,5434,10166,44821,26532,37465,];
    return lista;
 }
 
function listaI(){
    let lista = [25725,45950,26280,64706,51754,37252,26105,6152,108495,109343,108260,109018,109451,109453,109794,108202,109475,];
    return lista;
 }
 
function listaJ(){
    let lista = [62256,65077,27858,44660,20985,62974,71908,10777,22516,39647,9187,40273,32951,41407,33386,39336,25912,29250,109966,47775,
        37038,123821,63148,27017,2468,26228,9131,38343,6365,15898,42639,49416,40629,72472,20475,27887,59274,71759,20317,63741,
        117107,72170,39806,46966,33792,24535,71059,71678,30485,65289,4746,33146,114208,71866,68300,65637,59384,32503,72428,30373,
        6085,10726,30121,52506,61410,5143,109071,20244,16671,30897,30896,49802,19026,4886,41957,47447,56571,30787,40427,110000,
        41772,45679,72668,49173,62973,71581,62436,50591,58890,61794,34215,38929,27160,17154,61795,54544,2056,22730,123324,69131,
        110705,16986,35247,111845,120310,116964,144954,109121,116754,125399,144968,20549,71366,36318,22654,20264,61962,109909,110204,121721,
        108852,111918,109457,109456,121499,116805,109073,77758,74225,111460,111461,109364,109908,125010,120362,125011,122736,114352,109363,110768,
        114140,121688,125472,35635,116759,115508,116616,120004,120452,113886,19288,17261,34832,114985,117666,118903,116502,21502,50704,47575,32983,];
    return lista;
 }
 
function listaK(){
    let lista = [33834,27245,27246,32116,32332,29432,63207,61238,52251,6725,110299,116216,];
    return lista;
 }
 
function listaL(){
    let lista = [108247,116172,67847,116256,49396,114168,26144,41521,38452,60737,50790,63062,16086,108271,25064,31326,43274,47201,108343,53964,
        116791,116727,122293,123374,144953,111028,122460,116725,108525,123816,121646,66276,39073,38492,49458,21063,21328,39680,108432,26193,
        64642,133651,27516,125351,39890,34741,68518,10041,59279,18995,43233,61369,60304,27551,17369,66694,56737,110471,15947,120486,
        30175,55267,21965,68517,58687,20809,58991,58698,124954,116001,114427,133256,103402,];
    return lista;
 }
 
function listaM(){
    let lista = [125006,87007,114968,109076,63274,116210,113751,120410,110912,121518,120119,120253,108988,110270,116810,110009,112490,121044,125339,116825,
        125348,109941,120305,120302,124980,125003,109242,109215,109989,110266,120418,110771,39981,119677,111862,125013,119802,110547,116213,108475,
        108469,109083,108639,113889,112178,109678,124465,110281,108566,133283,122744,109670,121715,133266,111644,110917,14541,114163,116056,120461,
        109531,116813,120456,120467,120457,120458,35194,45828,46297,28860,36200,63753,12914,24993,41786,32937,45829,16544,59054,61857,
        70822,40675,21249,31707,27433,13454,116354,16233,38337,56574,16203,69849,19132,15073,108925,36343,38959,28638,68900,27542,
        28300,113246,27053,112858,108403,123069,120468,120453,114106,112406,52000,108647,25070,20497,51977,26768,13371,21404,42874,
        120460,120451,120464,120459,125340,115512,120462,117274,64278,67092,108174,117273,109081,114181,111009,108862,
        111996,115367,115052,108650,110933,];
    return lista;
 }
 
function listaN(){
    let lista = [45166,56653,112464,43618,1,83807,33945,20847,55236,120483,116726,28674,35117,71431,65131,];
    return lista;
 }
 
function listaO(){
    let lista = [38368,52372,47755,47349,112169,21735,];
    return lista;
 }
 
function listaP(){
    let lista = [116161,123106,107986,107990,108167,109266,125359,109265,125360,115510,110217,49164,14629,123455,114961,115389,62547,61621,35103,20915,
        108665,15377,14516,48465,33333,37429,7069,23500,75554,67415,65024,137728,];
    return lista;
 }
 
function listaQ(){
    let lista = [66939];
    return lista;
 }
 
function listaR(){
    let lista = [108678,109703,108452,109590,121716,109462,120243,46630,32442,21307,41507,20541,31274,26846,89102,20611,108906,15247,63809,8793,
        21067,50744,9469,54088,62926,14610,38304,605,73664,13426,67845,133269,15734,8922,26862,114708,123054,18377,20464,34111,
        39695,46596,65156,13804,66782,25920,121479,46905,27503,75386,108682,120369,125026,125341,125033,111729,64363,63039,110772,
        117319,110962,108873,108936,122978,];
    return lista;
 }
 
function listaS(){
    let lista = [41413,109384,110765,110156,110904,110015,109952,5943,23917,9720,3703,29784,6428,51904,20146,10832,8819,19353,70630,50714,
        35328,125363,35663,116814,28223,16690,21707,8008,24618,66248,110503,43827,109677,27455,25003,28417,43178,43814,121041,109551,
        108882,110717,116055,108632,109211,110658,115303,120752,116170,51515,22320,35123,32740,124851,108529,66256,62259,117855,109711,];
    return lista;
 }
 
function listaT(){
    let lista = [43254,116678,121335,109305,34739,24065,32023,29101,28675,125014,111309,122748,112201,66406,67399,56514,124452,124464,
        115517,123327,108951,];
    return lista;
 }
 
function listaU(){
    let lista = [15272,42535,];
    return lista;
 }
 
function listaV(){
    let lista = [17149,116160,117642,115604,123457,122707,108454,110725,111955,16935,19731,123336,111645,30137,24154,13619,29385,
        67419,62674,18959,55362,21455,26684,55988,115311,];
    return lista;
 }
 
function listaW(){
    let lista = [26787,35881,75705,108691,108706,108198,37807,14400,53490,108856,111438,122263,117271,108899,];
    return lista;
 }
 
function listaX(){
    let lista = [109373,52881,];
    return lista;
 }
 
function listaY(){
    let lista = [32077,62347,46904,];
    return lista;
 }
 
function listaZ(){
    let lista = [12806,29343,20502,16837,27087,18990,];
    return lista;
 }
