function blocoProduto (produto) {
  return `
  <div class="col col-3 m-col-4 s-col-6 xs-col-12">
    <div class="produto-lista">
      <div
        class="produto-lista__thumb"
        style="background-image: url('${'https://kelvins.cc/curso-style-guide/' + produto.id + '.jpg'}');"
      ></div>
      <h3 class="produto-lista__titulo font-primaria h3 c-primaria">${ produto.titulo }</h3>
      <a href="pdp.html?produto=${produto.id}" class="btn btn--primario full-width text-align-center">Ver mais</a>
    </div>
  </div>
  `
}

var main = function (callback) {
  function buscarProdutos () {
    var produtos = localStorage.getItem('PRODUTOS')
    if (produtos) {
      produtos = JSON.parse(produtos)
      callback(produtos)
    } else {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          produtos = JSON.parse(this.responseText).data
          localStorage.setItem('PRODUTOS', JSON.stringify(produtos))
          callback(produtos);
        }
      }
      xhttp.open('GET', 'https://gsapi.kelvins.cc/sheet/19nyP-wTMRzAApzQI7X0_fE3zk-yVH3txYP6rL9L2Urk/produtos', true)
      xhttp.setRequestHeader('Content-type', 'application/json')
      xhttp.send()
    }
  }

  buscarProdutos();
}