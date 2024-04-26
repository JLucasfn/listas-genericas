//Obter a data atual
const dataAtual = new Date();
//Formatar a data atual para exibir o nome do mês
const options = { month: 'long', year: 'numeric', day: 'numeric' };
const dataFormatada = dataAtual.toLocaleDateString('pt-BR', options);

//Função para gerar o PDF
function gerarPDF(contagemTot, valoresAchados, valoresNaoAchados){

    const date = new Date();
    const dataHora = date.getHours();
    const dataMin = date.getMinutes();
    const dataSeg = date.getSeconds();

    //variável para modelar como será o PDF
    var pageWidth = 8.5,
        lineHeight = 1.2,
        margin = 0.5,
        maxLineWidth = pageWidth - margin * 2,
        fontSize = 12,
        ptsPerInch = 72,
        oneLineHeight = (fontSize * lineHeight) / ptsPerInch,
        text = `${dataFormatada}.
        \n\nExistem atualmente ${contagemTot} valores no Catálogo.
        \n\nVocê achou os seguintes valores:${valoresAchados},
        \n\nVocê achou: ${valoresAchados.length} valores,
        \n\nVocê procurou os seguintes valores:${valoresNaoAchados},
        \n\nVocê procurou: ${valoresNaoAchados.length} valores.`

    doc = new jsPDF({
        unit: "in",
        lineHeight: lineHeight
    }).setProperties({ title: "Valores Procurados" });

    var textLines = doc.setFont("Arial").setFontSize(fontSize).splitTextToSize(text, maxLineWidth);

    doc.text(textLines, margin, margin + 2 * oneLineHeight);
    
    // salvar o arquivo usando o momento que foi feito o download.
    doc.save(dataHora + 'H_' + dataMin + 'M_' + dataSeg + 's' + ' - autos' + '.pdf');
}
