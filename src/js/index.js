const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});

const botaoPesquisar = document.getElementById("botao-pesquisar");

botaoPesquisar.addEventListener("click", () => {
  const nomePokemon = document.getElementById("input-nome").value.toLowerCase();
  const tipoPokemon = document.getElementById("select-tipo").value.toLowerCase();

  filtrarPokemon(nomePokemon, tipoPokemon);
});

function filtrarPokemon(nome, tipo) {
  const cartoesPokemon = document.querySelectorAll(".cartao-pokemon");

  cartoesPokemon.forEach((cartao) => {
    const nomeCartao = cartao.querySelector(".informacoes span:first-child").textContent.toLowerCase();
    const tiposCartao = Array.from(cartao.querySelectorAll(".tipo")).map((tipo) => tipo.textContent.toLowerCase());

    const nomeCorresponde = nomeCartao.includes(nome) || nome === "";
    const tipoCorresponde = tipo === "" || tiposCartao.includes(tipo);

    if (nomeCorresponde && tipoCorresponde) {
      cartao.style.display = "flex";
    } else {
      cartao.style.display = "none";
    }
  });
}