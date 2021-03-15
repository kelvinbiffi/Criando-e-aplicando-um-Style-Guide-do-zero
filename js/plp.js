(function () {
  var cache = {
    titulo: document.querySelector('#categoria'),
    produtos: document.querySelector('#produtos'),
  };

  function blocoProduto (produto) {
    return `
      <div class="col col-3 m-col-4 s-col-6 xs-col-12">
        <div class="bloco-produto bloco-produto--lista">
          <div
            class="bloco-produto__thumb"
            style="background-image: url('https://kelvins.cc/curso-style-guide/${produto.id}.jpg');">
          </div>
          <h3 class="bloco-produto__titulo font-primaria h3 c-primaria">${produto.titulo}</h3>
          <a class="sombra btn btn--primario full-width text-align-center">Ver mais</a>
        </div>
      </div>
    `;
  }

  function getCategoria () {
    return new URLSearchParams(document.location.search).get('categoria');
  }

  function preencherDadosPLP (produtos) {
    var produtosCategoria = produtos.filter((p) => p.categoria === getCategoria());
    produtosCategoria.forEach((produto, index) => {
      if (index === 0) {
        cache.titulo.innerText = produto.categorialabel;
      }
      cache.produtos.insertAdjacentHTML('beforeEnd', blocoProduto(produto))
    });
  }

  function buscarProdutos () {
    var produtos = localStorage.getItem('PAPAI_PRODUTOS')
    if (produtos) {
      produtos = JSON.parse(produtos);
      preencherDadosPLP(produtos);
    } else {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            produtos = JSON.parse(this.responseText).data;
            localStorage.setItem('PAPAI_PRODUTOS', JSON.stringify(produtos))
            preencherDadosPLP(produtos);
          }
        };
      xhttp.open('POST', 'https://gsapi.kelvins.cc/sheet/19nyP-wTMRzAApzQI7X0_fE3zk-yVH3txYP6rL9L2Urk/produtos', true);
      xhttp.setRequestHeader('Content-type', 'application/json');
      xhttp.send();
    }
  }

  buscarProdutos();
})();