// index.js  (NÃO MODIFICAR)
// Versão corrigida: enigma sequência (resposta = 17) com hash salgado + iterações

const crypto = require("crypto");

function spookyNarrative() {
  console.log("Noite de Halloween. Você entra na casa abandonada...");
  console.log("A luz pisca. Algo se aproxima...");
}

function getRiddle() {
  return {
    text: "Qual é o próximo número na sequência: 2, 3, 5, 8, 12, ?",
  };
}

// --- Valores secretos (hash CORRETO para "17" com os parâmetros abaixo) ---
const stored = {
  salt: "c9f3a1b7e2d4",
  iterations: 50000,
  hash: "235607c922f09ba50af801f84ff855feafcfcb337919e166c42105e4436b6b7f",
};

function pbkdf2Hex(value, salt, iterations) {
  return crypto
    .pbkdf2Sync(
      String(value),
      Buffer.from(salt, "hex"),
      iterations,
      32,
      "sha256"
    )
    .toString("hex");
}

function success() {
  console.log("\n✨ Você saiu vivo. ✨\n");
  process.exitCode = 0;
}

function fail() {
  console.log("\n💀 Você morreu. 💀\n");
  process.exitCode = 1;
}

function die() {
  const riddle = getRiddle();

  console.log("\nUma voz sussurra: 'Responda se quer viver'");

  if (typeof global.preventDeath === "function") {
    try {
      const result = global.preventDeath(riddle.text);

      if (result && typeof result.then === "function") {
        result
          .then((candidate) => {
            if (candidate === undefined || candidate === null) return fail();

            try {
              const candidateHash = pbkdf2Hex(
                candidate,
                stored.salt,
                stored.iterations
              );
              if (candidateHash === stored.hash) return success();
              return fail();
            } catch (e) {
              console.error(
                "Erro ao validar a resposta:",
                e && e.message ? e.message : e
              );
              return fail();
            }
          })
          .catch((e) => {
            console.error("Um feitiço falhou:", e && e.message ? e.message : e);
            return fail();
          });
        return;
      }

      if (result === undefined || result === null) return fail();
      const candidateHash = pbkdf2Hex(result, stored.salt, stored.iterations);
      if (candidateHash === stored.hash) return success();
      return fail();
    } catch (e) {
      console.error("Um feitiço falhou:", e && e.message ? e.message : e);
      return fail();
    }
  }

  return fail();
}

spookyNarrative();
console.log("Você explora o corredor. Um quadro cai. Uma porta range...");
die();
