var plp = function (produtos) {
  var cache = {
    titulo: document.querySelector('#categoria'),
    produtos: document.querySelector('#produtos'),
  };

  function getCategoria () {
    return new URLSearchParams(document.location.search).get('categoria');
  }

  function preencherDadosPLP () {
    var produtosCategoria = produtos.filter((p) => p.categoria === getCategoria());
    produtosCategoria.forEach((produto, index) => {
      if (index === 0) {
        cache.titulo.innerText = produto.categorialabel;
      }
      cache.produtos.insertAdjacentHTML('beforeEnd', blocoProduto(produto))
    });
  }

  preencherDadosPLP();
};