// alive.js — lê do usuário e envia para index.js
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

require("./index.js");
