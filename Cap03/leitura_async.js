const fs = require('fs');

const leituraAsync = (arquivo) => {
  console.log('Fazendo leitura assíncrona');
  console.time('Bloqueio assíncrono');

  fs.readFile(arquivo, () => { });

  console.timeEnd('Bloqueio assíncrono');
};

module.exports = leituraAsync;
