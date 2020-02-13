window.onload = initPage;

function initPage() {
    var script = document.createElement('script');
    var url = location.search.slice(1);
    var partes = url.split('&');
    var data = {};
    var oEmpregador = new Object();

    var dadosEmpresa = "";

    partes.forEach(function(parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    });

    if (data["empresa"] == "0") {
        dadosEmpresa = "appl"
    } else if (data["empresa"] == "1") {
        dadosEmpresa = "apply"
    }

    script.type = 'text/javascript';
    script.src = "dados/apply.js";
    script.onreadystatechange = "carregaEmpresa";
    script.onload = "carregaEmpresa";
    document.head.appendChild(script);

    document.getElementById("empregadorNome").textContent = oEmpregador.nome;
    document.getElementById("empregadorCnpj").textContent = oEmpregador.cnpj;

    console.log(data);
    console.log(dadosEmpresa);
}