# Desafio de Programação — "Quebrando a Maldição" 

Bem-vindo(a), viajante da escuridão...  
Hoje é noite de Halloween, e você acaba de acordar em uma sala fria e vazia.  
Uma voz ecoa no terminal:

> "Responda corretamente... ou pereça junto com seu código."

Este é o **desafio de Halloween da comunidade** — um enigma de lógica envolto em mistério e JavaScript.

---

## Objetivo

Seu objetivo é **sair vivo**.

Você recebeu um arquivo chamado **`index.js`**, o coração da maldição.  
Ele **não pode ser alterado**.  
Cada vez que você executa `node index.js`, o destino é o mesmo:

> "Você morreu."

Para quebrar a maldição, você deve **criar um novo arquivo JavaScript** (por exemplo `alive.js`) que:

1. Define uma função global chamada `preventDeath`.
2. Retorna a resposta correta para o enigma apresentado.
3. Ao executar o seu arquivo (ex.: `node alive.js`), o terminal deve exibir:

> "A luz retorna... Você saiu vivo!"

---

## Regras do Desafio

### O que é permitido
- Criar **novos arquivos** `.js` (ex.: `alive.js`, `tentativa.js`, etc.).
- Usar módulos nativos do Node.js (`readline`, etc.).
- Testar seu código quantas vezes quiser.
- Trabalhar em equipe e debater soluções.

### O que é proibido
- **Alterar o arquivo `index.js`** (qualquer modificação desclassifica).
- Mudar o valor do hash, salt ou número de iterações.
- Copiar código de outras equipes.
- Apagar ou renomear o `index.js`.

---

## Consequência da Maldição

Você tem **3 tentativas** para responder o enigma.  
Se errar todas as 3...

> Seu arquivo (`alive.js` ou qualquer outro que você criou) será **apagado do diretório automaticamente** pela maldição.

Sim. O jogo **deletará seu código** usando:
```js
fs.unlinkSync()
