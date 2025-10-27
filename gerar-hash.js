const crypto = require("crypto");

const answer = "faca"; // troque aqui a resposta secreta localmente
const salt = crypto.randomBytes(6).toString("hex"); // 12 hex chars
const iterations = 50000; // ajuste conforme quiser
const hash = crypto
  .pbkdf2Sync(
    String(answer),
    Buffer.from(salt, "hex"),
    iterations,
    32,
    "sha256"
  )
  .toString("hex");

console.log("salt:", salt);
console.log("iterations:", iterations);
console.log("hash:", hash);
