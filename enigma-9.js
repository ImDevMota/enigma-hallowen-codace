const reset = "\x1b[0m";
const bright = "\x1b[1m";
const dim = "\x1b[2m";
const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const magenta = "\x1b[35m";

function centerText(text) {
  const width = process.stdout.columns || 80;
  const lines = text.split("\n");
  return lines
    .map((line) => {
      const padding = Math.floor(
        (width - line.replace(/\x1b\[[0-9;]*m/g, "").length) / 2
      );
      return " ".repeat(padding) + line;
    })
    .join("\n");
}

const separator = centerText(
  `${dim}====================================================${reset}`
);

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

// Enigma aqui!
const enigma =
  "Uma palavra é escrita incorretamente em todos os dicionários. Qual é? (Palavra)";
const salt = "halloween_salt_2025";
const iterations = 100000;
const storedHash = "kxW03XIzcEgzxWmjkFBql1AAlW8Xvmr8kb8xAbRBNBM=";

function gerarHash(resposta) {
  return crypto
    .pbkdf2Sync(resposta, salt, iterations, 32, "sha256")
    .toString("base64");
}

async function jogo() {
  console.log("\n" + separator);
  console.log(
    centerText(`${bright}${green}Bem-vindo ao desafio Hallowen da Coda.ce:`)
  );
  console.log(centerText(`${bright}${yellow}'Código Amaldiçoado'${reset}`));
  console.log(separator + "\n");

  console.log(
    centerText(`${magenta}Você acorda em uma sala escura. Uma voz sussurra:\n`)
  );
  console.log(
    centerText(
      `${bright}${red}❝ Responda corretamente ou perecerá... ❞\n${reset}`
    )
  );

  console.log(separator + "\n");

  if (typeof global.preventDeath !== "function") {
    console.log("\n💀 Você morreu. (não existe função preventDeath definida)");
    return;
  }

  let tentativas = 3;
  while (tentativas > 0) {
    try {
      const resposta = await Promise.resolve(global.preventDeath(enigma));

      if (!resposta) {
        console.log("\n👻 Você ficou em silêncio... A escuridão se aproxima.");
        tentativas--;
        continue;
      }

      const hashTentativa = gerarHash(String(resposta).trim());

      if (hashTentativa === storedHash) {
        console.log("\n✨ A luz retorna... Você saiu vivo! ✨");
        return;
      } else {
        tentativas--;
        if (tentativas > 0) {
          console.log(`\n❌ Errado! Restam ${tentativas} tentativa(s)...`);
        } else {
          console.log("\n💀 Três erros... a maldição se cumpriu!");
          tentarApagarArquivo();
        }
      }
    } catch (e) {
      console.log(
        "\n⚠️ Algo deu errado na tentativa. A maldição se intensifica..."
      );
      tentativas--;
    }
  }
}

function tentarApagarArquivo() {
  const files = fs.readdirSync(process.cwd());
  const possibleFiles = files.filter(
    (f) => f !== "index.js" && f.endsWith(".js")
  );

  for (const file of possibleFiles) {
    try {
      fs.unlinkSync(path.join(process.cwd(), file));
      console.log(`🪓 O arquivo ${file} foi devorado pelas trevas...`);
    } catch (err) {
      console.log(`😈 ${file} resistiu à maldição... por enquanto.`);
    }
  }
  console.log("\n💀 Fim de jogo.");
}

jogo();
