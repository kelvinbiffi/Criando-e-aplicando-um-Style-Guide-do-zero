var pdp = function (produtos) {
  var cache = {
    produto: document.querySelector('.bloco-produto--detalhe'),
    listaMaisTitulo: document.querySelector('#titulo-mais'),
    listaMais: document.querySelector('#mais'),
  };

  function getProduto () {
    return produtos
      .filter((p) => p.id === new URLSearchParams(document.location.search).get('produto'))[0];
  }

  function listarDetalhes () {
    var produto = getProduto();
    cache.produto.innerHTML = `
      <img class="bloco-produto__image max-full-width" src="https://kelvins.cc/curso-style-guide/${produto.id}.jpg">
      <div class="bloco-produto__info text-align-left">
        <h2 class="font-primaria h2 c-primaria">${produto.titulo}</h2>
        <p class="bloco-produto__info__descricao font-primaria paragraph c-primaria pre-line">${produto.descricao}</p>
        <a class="sombra btn btn--primario text-align-center">Comprar</a>
        <a class="sombra btn btn--secundario text-align-center">Adicionar a lista de desejos</a>
      </div>
    `;
  }

  function listarMais () {
    var produtoAtual = getProduto();
    cache.listaMaisTitulo.innerText += ' ' + produtoAtual.categorialabel;
    
    var produtosCategoria = produtos.filter((p) => p.categoria === produtoAtual.categoria && p.id !== produtoAtual.id);
    produtosCategoria.forEach((produto, index) => {
      cache.listaMais.insertAdjacentHTML('beforeEnd', blocoProduto(produto))
    });
  }

  listarDetalhes();
  listarMais();
};