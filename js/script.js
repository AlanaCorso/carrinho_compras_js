// Inicialização de variáveis
let cart = [];
let modalQt = 0;
let key = 0;

// Função auxiliar para selecionar um único elemento do DOM
const c = (el) => document.querySelector(el);

// Função auxiliar para selecionar vários elementos do DOM
const cs = (el) => document.querySelectorAll(el);

// Manipulação dos dados do modelo a partir do JSON
modelsJson.map((item, index) => {
    // Clonar o item do modelo
    let modelsItem = c('.models .models-item').cloneNode(true);

    // Atualizar os dados do item do modelo clonado 
    modelsItem.setAttribute('data-key', index);
    modelsItem.querySelector
})