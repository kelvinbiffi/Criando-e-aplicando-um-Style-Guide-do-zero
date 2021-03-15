var home = function (produtos) {
  var cache = {
    'video-game': document.querySelector('#video-game'),
    'cafe': document.querySelector('#cafe'),
    'livro': document.querySelector('#livro'),
  };

  function pupularListas () {
    produtos.forEach(produto => {
      cache[produto.categoria].insertAdjacentHTML('beforeEnd', blocoProduto(produto))
    });
  }

  pupularListas();
};