var nIdEmpregador = 0;
var nIdFuncionario = 0;
var nAno = 2020;
var nMes = 01;

var aParametrosUrl = new Array();

window.onload = initPage;

function initPage() {
    aParametrosUrl = setParametrosURL();

    nIdEmpregador = parseInt(aParametrosUrl["empresa"]);
    nIdFuncionario = parseInt(aParametrosUrl["funcionario"]);
    nAno = parseInt(aParametrosUrl["ano"]);
    nMes = parseInt(aParametrosUrl["mes"]);

    setPeriodo(nAno, nMes);
    setEmpregador(nIdEmpregador);
    setFuncionario(nIdFuncionario);

    setTable();
    setAssinatura();
}

function setParametrosURL() {
    var url = location.search.slice(1);
    var partes = url.split('&');
    var data = new Array();

    partes.forEach(function(parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    });

    return data;
}

function setTable() {
    document.getElementById("periodoMesReferencia").textContent = oPeriodo.mesReferencia;
    document.getElementById("periodoMesExtenso").textContent = oPeriodo.mesExtenso;

    document.getElementById("empregadorNome").textContent = oEmpregador.nome;
    document.getElementById("empregadorCnpj").textContent = oEmpregador.cnpj;

    document.getElementById("empregadoNome").textContent = oEmpregado.nome;
    document.getElementById("empregadoCtps").textContent = oEmpregado.ctps;
    document.getElementById("empregadoSerie").textContent = oEmpregado.serie;
    document.getElementById("empregadoFuncao").textContent = oEmpregado.funcao;
    document.getElementById("empregadoHorario").textContent = oEmpregado.horario;

    for (nX = 0; nX < oPeriodo.ultimoDIa; nX++) {
        criaLinha(nX + 1);
    }
}

function criaLinha(nId) {
    var tabela = document.getElementById("tabelaPonto");
    var linha = tabela.insertRow(12 + nId);
    var coluna1 = linha.insertCell(0);
    var coluna2 = linha.insertCell(1);
    var coluna3 = linha.insertCell(2);
    var coluna4 = linha.insertCell(3);
    var coluna5 = linha.insertCell(4);
    var data = new Date(oPeriodo.ano, oPeriodo.mes, nId);
    var dataString = (("0000" + oPeriodo.ano).slice(-4)).concat(("00" + (oPeriodo.mes + 1)).slice(-2), ("00" + nId).slice(-2))
    var diaSemana = data.getDay();
    var classeCss;

    if (diaSemana == 0 || diaSemana == 6 || feriado.findIndex(Element => Element == dataString) > 0) {
        classeCss = "cinza";
    } else {
        classeCss = "branco";
    }

    coluna1.innerHTML = nId;
    coluna1.className = "campo_centralizado ".concat(classeCss);
    coluna2.innerHTML = defineImagem(0, 9, classeCss);
    coluna2.className = "campo_centralizado ".concat(classeCss);
    coluna3.innerHTML = defineImagem(1, 2, classeCss);
    coluna3.className = "campo_centralizado ".concat(classeCss);
    coluna4.innerHTML = defineImagem(1, 3, classeCss);
    coluna4.className = "campo_centralizado ".concat(classeCss);
    coluna5.innerHTML = defineImagem(1, 8, classeCss);
    coluna5.className = "campo_centralizado ".concat(classeCss);
}

function defineImagem(nHr1, nHr2, classeCss) {
    var cRet = "";
    var nX;

    if (classeCss == "cinza") {
        cRet = "&nbsp;";
    } else if (classeCss == "branco") {
        for (nX = 0; nX < 5; nX++) {
            cRet += "<img style='transform: scale(1.";
            cRet += aleatorioEntre(-7, 5);
            cRet += ") rotate("
            cRet += aleatorioEntre(-10, 10);
            cRet += "deg);' src='img/";
            cRet += nIdFuncionario;
            cRet += "/";
            if (nX == 0) {
                cRet += valorExtenso(nHr1);
            } else if (nX == 1) {
                cRet += valorExtenso(nHr2);
            } else if (nX == 2) {
                cRet += "ponto";
            } else {
                cRet += "zero";
            }
            cRet += aleatorioEntre(1, oEmpregado.quantidadeImagem + 1);
            if (nX == 2) {
                cRet += ".png' height='15px' width='10px'>"
            } else {
                cRet += ".png' height='15px' width='15px'>"
            }
        }
    }
    return cRet;
}

function valorExtenso(nVal) {
    var cRet;
    if (nVal == 0) {
        cRet = "zero";
    } else if (nVal == 1) {
        cRet = "um";
    } else if (nVal == 2) {
        cRet = "dois";
    } else if (nVal == 3) {
        cRet = "tres";
    } else if (nVal == 8) {
        cRet = "oito";
    } else if (nVal == 9) {
        cRet = "nove";
    }
    return cRet;
}

function aleatorioEntre(inferior, superior) {
    inferior = Math.ceil(inferior);
    superior = Math.floor(superior);
    return Math.floor(Math.random() * (superior - inferior)) + inferior;
}

function setAssinatura() {
    var cRet = "";
    cRet += "<div><img class='assinatura' style='transform: scale(1.";
    cRet += aleatorioEntre(-5, 0);
    cRet += ") rotate("
    cRet += aleatorioEntre(-5, 5);
    cRet += "deg);' src='img/";
    cRet += nIdFuncionario;
    cRet += "/assinatura";
    cRet += aleatorioEntre(1, oEmpregado.quantidadeImagem + 1);
    cRet += ".png' height='50px' width='150px' /></div>"
        // cRet = "<div><img class='assinatura' src='img/0/assinatura1.png'></div>"

    document.getElementById("assinatura").innerHTML = cRet;
}