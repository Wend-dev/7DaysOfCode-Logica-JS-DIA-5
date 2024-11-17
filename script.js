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
  