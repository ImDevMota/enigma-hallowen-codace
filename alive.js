// palavras devem ser em letra maiscula, estrutura basica do arquivo reposta
const readline = require("readline");

global.preventDeath = function (question) {
  return new Promise((resolve) => {
    console.log("\nO enigma é:");
    console.log(question);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("\nSua resposta: ", (answer) => {
      rl.close();
      resolve(answer.trim()); // importante: trim() remove espaços/newline
    });
  });
};

require("./enigma-10.js");
