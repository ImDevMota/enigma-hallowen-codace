# Desafio de Programação — "Código Amaldiçoado"

Bem-vindo(a), viajante da escuridão.  
Hoje é noite de Halloween, e você acaba de acordar em uma sala fria e vazia.  
Uma voz ecoa no terminal:

> "Responda corretamente... ou pereça junto com seu código."

Este é o **Desafio de Halloween da Coda.ce** — um enigma de lógica envolto em mistério e JavaScript.

---

## Objetivo

Seu objetivo é **sair vivo**.

Dentro deste repositório existem **vários arquivos de enigma**, como:

```
enigma-1.js  
enigma-2.js  
enigma-3.js  
...
```

Cada arquivo contém um desafio lógico diferente, com sua própria resposta secreta.

Você vai **receber um desses enigmas**, estudar o código dele, entender o que ele espera como resposta e **criar o seu próprio arquivo JavaScript** (por exemplo, `alive.js`) capaz de quebrar a maldição.

---

## Como Jogar

1. Aguarde até receber **um dos arquivos de enigma**.  
2. **Não modifique** o conteúdo do arquivo do enigma escolhido.  
   Ele representa a maldição original — alterar o enigma desclassifica o jogador.  
3. Crie um novo arquivo, por exemplo:  
   ```
   alive.js
   ```  
4. Dentro do seu arquivo, você deverá:
   - Usar o módulo `readline` (ou similar) para **ler a resposta digitada pelo jogador no terminal**.  
   - Criar a função global **`preventDeath()`**, que vai receber o paramêtro question, mostrar na tela e retornar uma Promise.

     Exemplo:

     ```js
      const readline = require("readline");

      global.preventDeath = function (enigma) {
        return new Promise((resolve) => {
           console.log("\nO enigma é:");
           console.log(enigma);
     
          // Resto da Promise que recebe a resposta que será digitada
        } 
      }
     ```

     Dica: Crie uma function que feche o terminal após receber resposta, remova espaços extras no início e no final da resposta e também quebras de linha (\n) ou tabulações que podem ter sido digitadas por acidente. Depois, retorne a resposta formatada via             Promise (Isso é importante para que, por exemplo, "resposta " e "resposta" sejam tratados como iguais).
       
   - No **final do arquivo**, adicionar um `require()` apontando para o enigma escolhido.  
     Exemplo:
     ```js
     require("./enigma-3.js"); // seu enigma 
     ```
     Isso conecta o seu código ao desafio específico.  

5. Quando sua equipe terminar, chame um supervisor e então execute seu arquivo com:
   ```
   node alive.js
   ```
6. Se sua resposta for a correta, o terminal mostrará:
   ```
   A luz retorna... Você saiu vivo!
   ```
    E o supervisor anunciará a vitória da sua equipe.

 **OBS: As repostas para os enigmas sempre serão uma palavra (Primeira letra maíscula) ou um número (Inteiro).**
  
---

## Regras do Desafio

### O que é permitido
- Criar novos arquivos `.js` (`alive.js`, `tentativa2.js`, etc.).
- Usar módulos nativos do Node.js (`fs`, `readline`, `crypto`, etc.).
- Testar seu código quantas vezes quiser.
- Trabalhar em equipe e compartilhar teorias.

### O que é proibido
- Alterar qualquer arquivo de enigma (`enigma-1.js`, `enigma-2.js`, etc.).
- Modificar o hash, salt ou número de iterações de validação.
- Copiar o código de outras equipes.
- Renomear, mover ou apagar os arquivos de enigma.
- Pesquisar enigma ou fazer uso de IA.

---

## Consequência da Maldição

Você tem **3 tentativas** para quebrar o feitiço.  
A cada erro, a escuridão se aproxima...  

> “A punição é severa... Pois nem o código sobrevive à escuridão.”

---

## Dica Final

Apenas quem compreender o enigma escolhido conseguirá sobreviver.  
Observe cada detalhe, cada número, cada pista.  
A resposta sempre esteve ali.

Boa sorte, viajante.  
A escuridão observa.
