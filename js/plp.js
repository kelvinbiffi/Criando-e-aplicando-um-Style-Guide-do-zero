var plp = function (produtos) {
  var cache = {
    titulo: document.querySelector('#titulo'),
    produtosLista: document.querySelector('#produtosLista'),
  }

  function getCategoria () {
    return new URLSearchParams(document.location.search).get('categoria')
  }

  function preencherDadosPLP () {
    var produtosCategoria = produtos.filter((p) => p.categoria === getCategoria())
    
    cache.titulo.innerText = produtosCategoria[0].categorialabel;
    produtosCategoria.forEach(produto => {
      cache.produtosLista.insertAdjacentHTML('beforeEnd', blocoProduto(produto))
    });
  }

  preencherDadosPLP();
}