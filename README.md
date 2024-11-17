# Lista de Compras Organizada

Este é um programa em **JavaScript** que ajuda a organizar sua lista de compras no supermercado por categorias. Ele utiliza interações simples via `prompt` e `alert` para coletar as informações do usuário e exibe a lista final organizada.

## Funcionalidades

1. **Adicionar Itens**  
   - O programa pergunta se você deseja adicionar um item à sua lista de compras.  
   - Caso aceite, você insere o nome do item e escolhe a categoria dele.  

2. **Categorias Pré-definidas**  
   - Frutas  
   - Laticínios  
   - Congelados  
   - Doces  
   - Outros  

3. **Lista Final**  
   - Quando você finalizar as adições, o programa exibe a lista completa organizada por categorias.

## Exemplo de Uso

1. **Entrada**  
   - Você adiciona:
     - "banana" em "Frutas"
     - "leite de vaca" em "Laticínios"
     - "chocolate" em "Doces"
   - Depois, responde "não" quando perguntado se deseja adicionar mais itens.

2. **Saída**  
   - O programa exibe:
   - Lista de Compras: Frutas: banana Laticínios: leite de vaca Congelados: Doces: chocolate Outros:
   
## Como Executar

1. Abra o console do navegador ou um ambiente de execução JavaScript.
2. Copie e cole o seguinte código no console:

```javascript
// Inicialização das listas de categorias
let listaDeCompras = {
  Frutas: [],
  Laticínios: [],
  Congelados: [],
  Doces: [],
  Outros: []
};

let adicionarMais = true;

alert("Bem-vindo à sua lista de compras! Vamos organizá-la por categorias.");

while (adicionarMais) {
  let resposta = prompt("Deseja adicionar um item à sua lista de compras? Responda com 'sim' ou 'não'.");

  if (resposta.toLowerCase() === "sim") {
    let comida = prompt("Qual comida você deseja adicionar?");
    let categoria = prompt(`Em qual categoria essa comida se encaixa?
Opções: Frutas, Laticínios, Congelados, Doces, Outros`);

    // Adiciona o item à categoria correspondente ou na categoria "Outros"
    if (listaDeCompras[categoria]) {
      listaDeCompras[categoria].push(comida);
    } else {
      listaDeCompras.Outros.push(comida);
    }
  } else if (resposta.toLowerCase() === "não") {
    adicionarMais = false;
  } else {
    alert("Resposta inválida. Por favor, responda apenas com 'sim' ou 'não'.");
  }
}

// Exibindo a lista organizada
let resultado = "Lista de Compras:\n";
for (let categoria in listaDeCompras) {
  if (listaDeCompras[categoria].length > 0) {
    resultado += `${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
  } else {
    resultado += `${categoria}: \n`;
  }
}

alert(resultado);
console.log(resultado);
