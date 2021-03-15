(function () {
  var cache = {
    headerMenuLista: document.querySelector('.header__menu__lista'),
    footerMenuLista: document.querySelector('.footer__main__lista.lista-produtos'),
  };

  function linkPLP (categoria, classe, classeCor) {
    return `
      <li class="${classe}">
        <a
          href="/plp.html?categoria=${categoria.id}"
          class="link link--primario ${classeCor}"
        >
          ${categoria.label}
        </a>
      </li>
    `;
  }

  function removerDuplicatas (categorias) {
    var categoriasUnicas = [];
    categorias.forEach((categoria) => {
      if (categoriasUnicas.filter((c) => (c.id === categoria.id)).length == 0) {
        categoriasUnicas.push(categoria);
      }
    });
    return categoriasUnicas;
  }

  function createMenusLinks (produtos) {
    var categorias = produtos.map((produto) => ({
      id: produto.categoria,
      label: produto.categorialabel,
    }));
    removerDuplicatas(categorias).forEach(produto => {
      cache.headerMenuLista.insertAdjacentHTML(
        'beforeEnd',
        linkPLP(produto, 'header__menu__lista__item', 'c-primaria'),
      );
      cache.footerMenuLista.insertAdjacentHTML(
        'beforeEnd',
        linkPLP(produto, 'footer__main__lista__item', 'c-branco'),
      );
    });
  };

  function buscarProdutos () {
    var produtos = localStorage.getItem('PAPAI_PRODUTOS')
    if (produtos) {
      produtos = JSON.parse(produtos);
      createMenusLinks(produtos);
    } else {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            produtos = JSON.parse(this.responseText).data;
            localStorage.setItem('PAPAI_PRODUTOS', JSON.stringify(produtos))
            createMenusLinks(produtos);
          }
        };
      xhttp.open('POST', 'https://gsapi.kelvins.cc/sheet/19nyP-wTMRzAApzQI7X0_fE3zk-yVH3txYP6rL9L2Urk/produtos', true);
      xhttp.setRequestHeader('Content-type', 'application/json');
      xhttp.send();
    }
  }

  buscarProdutos();
})();