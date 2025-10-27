// index.js
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

// --- Dados secretos do enigma ---
const pergunta = "Qual é o próximo número na sequência: 2, 3, 5, 8, 12, ?";
const salt = "halloween_salt_2025";
const iterations = 100000;
const storedHash = "bLN6U4FjYchrKK0jxXi0UxkYsgyyab0OaCaycHsUtb8="; // hash da resposta "17"

// Função para gerar hash da resposta dada
function gerarHash(resposta) {
  return crypto
    .pbkdf2Sync(resposta, salt, iterations, 32, "sha256")
    .toString("base64");
}

// Função principal do jogo
async function jogo() {
  console.log("🕯️ Bem-vindo ao desafio 'Quebrando a Maldição'...");
  console.log("Você acorda em uma sala escura. Uma voz sussurra:");
  console.log(`❝ Responda corretamente ou perecerá... ❞`);
  console.log(`\n🧩 Enigma: ${pergunta}`);

  if (typeof global.preventDeath !== "function") {
    console.log("\n💀 Você morreu. (não existe função preventDeath definida)");
    return;
  }

  // 3 tentativas
  let tentativas = 3;
  while (tentativas > 0) {
    try {
      // Chama a função dos jogadores (pode ser síncrona ou Promise)
      const resposta = await Promise.resolve(global.preventDeath(pergunta));

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

// Função para tentar apagar o arquivo do jogador
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
