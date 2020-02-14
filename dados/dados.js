var oPeriodo = new Object();
var oEmpregador = new Object();
var oEmpregado = new Object();
var feriado = new Array();
var oFuncionarioColection = new Array();

function setPeriodo(nAno, nMes) {
    oPeriodo.ano = nAno;
    oPeriodo.mes = nMes; /* 1=Janeiro,2=Fevereiro,3=Março,4=Abril,5=Maio,6=Junho,7=Julho,8=Agosto,9=Setembro,10=Outubro,11=Novembro,12=Dezembro */
    oPeriodo.mes = oPeriodo.mes - 1;
    oPeriodo.ultimoDIa = lastDay(oPeriodo.ano, oPeriodo.mes);
    oPeriodo.mesReferencia = "01 a ".concat(oPeriodo.ultimoDIa);
    oPeriodo.mesExtenso = getMesExtenso(oPeriodo.mes).concat(" ", oPeriodo.ano);
}

function setEmpregador(nId) {
    var oEmpregadorDetail
    var oEmpregadorColection = new Array();
    // Dados do empregador
    oEmpregadorDetail = new Object();
    oEmpregadorDetail.nome = "appl ti eirele";
    oEmpregadorDetail.cnpj = "05.101.848/0001-20";
    oEmpregadorColection.push(oEmpregadorDetail);

    oEmpregadorDetail = new Object();
    oEmpregadorDetail.nome = "apply system ltda";
    oEmpregadorDetail.cnpj = "16.482.400/0001-10";
    oEmpregadorColection.push(oEmpregadorDetail);

    oEmpregador.nome = oEmpregadorColection[nId].nome;
    oEmpregador.cnpj = oEmpregadorColection[nId].cnpj;
}

function setFuncionario(nId) {
    var oFuncionarioDetail
        // Ayrton Senna
    oFuncionarioDetail = new Object();
    oFuncionarioDetail.nome = "matheus antonio lambiazzi";
    oFuncionarioDetail.ctps = "41513";
    oFuncionarioDetail.serie = "340";
    oFuncionarioDetail.funcao = "programador";
    oFuncionarioDetail.horario = "segunda a sexta-feira das 09:00 as 12:00 e das 13:00 as 18:00";
    oFuncionarioDetail.quantidadeImagem = 2;
    oFuncionarioColection.push(oFuncionarioDetail);
    //hudson
    oFuncionarioDetail = new Object();
    oFuncionarioDetail.nome = "hudson de souza santos";
    oFuncionarioDetail.ctps = "00017073";
    oFuncionarioDetail.serie = "00277";
    oFuncionarioDetail.funcao = "programador";
    oFuncionarioDetail.horario = "segunda a sexta-feira das 09:00 as 12:00 e das 13:00 as 18:00";
    oFuncionarioDetail.quantidadeImagem = 5;
    oFuncionarioColection.push(oFuncionarioDetail);

    // Define
    oEmpregado.nome = oFuncionarioColection[nId].nome;
    oEmpregado.ctps = oFuncionarioColection[nId].ctps;
    oEmpregado.serie = oFuncionarioColection[nId].serie;
    oEmpregado.funcao = oFuncionarioColection[nId].funcao;
    oEmpregado.horario = oFuncionarioColection[nId].horario;
    oEmpregado.quantidadeImagem = oFuncionarioColection[nId].quantidadeImagem;

}

function setFeriado() {
    // 2019
    feriado.push("20190101"); // 01/01/2019 (terça-feira): Ano Novo
    feriado.push("20190125"); // 25/01/2019 (sexta-feira): Aniversário de São Paulo
    feriado.push("20190305"); // 05/03/2019 (terça-feira): Carnaval
    feriado.push("20190419"); // 19/04/2019 (sexta-feira): Sexta-feira da Paixão
    feriado.push("20190421"); // 21/04/2019 (domingo): Tiradentes
    feriado.push("20190501"); // 01/05/2019 (quarta-feira): Dia do Trabalhador
    feriado.push("20190620"); // 20/06/2019 (quinta-feira): Corpus Christi
    feriado.push("20190709"); // 09/07/2019 (terça-feira): Data Magna do Estado
    feriado.push("20190907"); // 07/09/2019 (sábado): Independência do Brasil
    feriado.push("20191012"); // 12/10/2019 (sábado): Nossa Senhora Aparecida
    feriado.push("20191102"); // 02/11/2019 (sábado): Finados
    feriado.push("20191115"); // 15/11/2019 (sexta-feira): Proclamação da República
    feriado.push("20191120"); // 20/11/2019 (quarta-feira): Consciencia Negra
    feriado.push("20191225"); // 25/12/2019 (quarta-feira): Natal
    // 2020
    feriado.push("20200101"); // 01/01/2020 (quarta-feira): Confraternização Universal
    feriado.push("20200125"); // 25/01/2020 (sábado): Aniversário de São Paulo
    feriado.push("20200224"); // 24/02/2020 (segunda-feira): Carnaval
    feriado.push("20200225"); // 25/02/2020 (terça-feira): Carnaval
    feriado.push("20200410"); // 10/04/2020 (sexta-feira): Paixão de Cristo
    feriado.push("20200421"); // 21/04/2020 (terça-feira): Tiradentes
    feriado.push("20200501"); // 01/05/2020 (sexta-feira): Dia do Trabalho
    feriado.push("20200611"); // 11/06/2020 (quinta-feira): Corpus Christi
    feriado.push("20200907"); // 07/09/2020 (segunda-feira): Independência do Brasil
    feriado.push("20201012"); // 12/10/2020 (segunda-feira): Nossa Sr.a Aparecida - Padroeira do Brasil
    feriado.push("20201102"); // 02/11/2020 (segunda-feira): Finados
    feriado.push("20201115"); // 15/11/2020 (domingo): Proclamação da República
    feriado.push("20201225"); // 25/12/2020 (sexta-feira): Natal
}

function getMesExtenso(nMes) {
    var mesExtenso = [];
    mesExtenso.push("janeiro");
    mesExtenso.push("fevereiro");
    mesExtenso.push("março");
    mesExtenso.push("abril");
    mesExtenso.push("maio");
    mesExtenso.push("junho");
    mesExtenso.push("julho");
    mesExtenso.push("agosto");
    mesExtenso.push("setembro");
    mesExtenso.push("outubro");
    mesExtenso.push("novembro");
    mesExtenso.push("dezembro");
    return mesExtenso[nMes];
}

function lastDay(y, m) {
    return new Date(y, m + 1, 0, 0, 0, 0, 0).getDate();
}