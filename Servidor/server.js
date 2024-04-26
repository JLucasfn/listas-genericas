//Importar o módulo http
const http = require('http');

//Importar o módulo fs
const fs = require('fs');

//Importar o módulo path
const path = require('path');

//Criar o servidor HTTP
const server = http.createServer((req, res) => {

  //Verifica se a URL solicitada é '/pdfGen.js'
  if (req.url === '/pdfGenericos.js') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const filePath = path.join(__dirname, '..', 'Site', 'js', 'pdfGen.js');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(data);
      }
    });
  }

  //Verifica se a URL solicitada é '/listasGen.js'
  else if (req.url === '/listasGenericas.js') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const filePath = path.join(__dirname, '..', 'Site', 'js', 'listasGen.js');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(data);
      }
    });
  }
  
  //Se as URL's não estiverem incorretas
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Arquivo não encontrado');
  }
});

//Define a porta em que o servidor irá executar
const port = 3000;

//Inicia o servidor e aguarda por conexões
server.listen(port, () => {
  //Exibe uma mensagem indicando que o servidor está em execução
  console.log(`Servidor operando em http://localhost:${port}\nNão feche esta aba.`);
});
