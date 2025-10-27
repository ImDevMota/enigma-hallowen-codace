// gerar-hash.js
const crypto = require("crypto");

// 👉 Edite aqui sua resposta e configurações
const resposta = "17"; // resposta correta
const salt = "halloween_salt_2025"; // pode mudar para algo único
const iterations = 100000; // quanto maior, mais lento, porém mais seguro

// Gerar o hash
const hash = crypto
  .pbkdf2Sync(resposta, salt, iterations, 32, "sha256")
  .toString("base64");

console.log("=== Gerador de Hash de Enigma ===");
console.log(`Resposta: ${resposta}`);
console.log(`Salt: ${salt}`);
console.log(`Iterações: ${iterations}`);
console.log(`Hash gerado:\n${hash}`);
console.log("\nCopie esses valores e substitua no index.js");
