var pdp = function (produtos) {
  var cache = {
    produtoImage: document.querySelector('#produto-image'),
    produtoTitulo: document.querySelector('#produto-titulo'),
    produtoDescricao: document.querySelector('#produto-descricao'),
    produtosRelacionados: document.querySelector('#produtos-relacionados')
  }

  function getProduto () {
    return new URLSearchParams(document.location.search).get('produto')
  }

  function carregarProdutosRelacinados (produto) {
    var produtosRelacionados = produtos.filter((p) => p.id !== produto.id && p.categoria === produto.categoria)
    produtosRelacionados.forEach(produto => {
      cache.produtosRelacionados.insertAdjacentHTML('beforeEnd', blocoProduto(produto))
    });
  }

  function preencherDadosProduto () {
    var produto = produtos.filter((p) => p.id === getProduto())[0]
    cache.produtoImage.src = 'https://kelvins.cc/curso-style-guide/' + produto.id + '.jpg'
    cache.produtoTitulo.innerText = produto.titulo
    cache.produtoDescricao.innerText = produto.descricao

    carregarProdutosRelacinados(produto)
  }

  preencherDadosProduto();
}