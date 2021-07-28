// KOBE-Products

const LogisticInfo = (products) => {
  const tipoSLA = {
    "Entrega Agendada": [],
    "Entrega Correios": [],
    "Retirada em loja": []
  };
  
  for (let product of products) {
    let arraySLA = ["Entrega Agendada", "Entrega Correios", "Retirada em loja"]

    for ( let i in arraySLA ) {
      if (product.slas.indexOf(arraySLA[i]) >= 0) {
        tipoSLA[arraySLA[i]].push(product.name)
      }
    }
  }

  console.log(`
    SLA: ${JSON.stringify(tipoSLA)}
  `);

  return tipoSLA;
};

(() => {
  const products = [
    {
      id: "1234",
      name: "Camisa polo",
      slas: ["Entrega Agendada", "Entrega Correios"],
    },
    {
      id: "567",
      name: "Calça jeans",
      slas: ["Entrega Correios", "Retirada em loja"],
    },
    {
      id: "890",
      name: "Vestido",
      slas: ["Retirada em loja"],
    },
  ];

  LogisticInfo(products);
})();
