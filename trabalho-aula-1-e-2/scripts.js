function changeOrdenateList(tp){
    let el = document.getElementsByClassName("ordenateList");
    for(let elementAt = 0; elementAt < el.length; ++elementAt){
        el[elementAt].attributes.getNamedItem("type").value = tp;
    }
}
function loadDataInTable() {
    let dadosFakeAPI =[
        {"qtde":6,"descricao":"Galão de Cloro 5 litros","vlr":3.52},
        {"qtde":10,"descricao":"Esponja abrasiva pacote c/ 1 und","vlr":2.25},
        {"qtde":15,"descricao":"Caixas de Detergente Líquido 200ml c/ 20und","vlr":25.87},
        {"qtde":12,"descricao":"Desengordurante galão 5 litros","vlr":45.03},
        {"qtde":300,"descricao":"Esponjas amarela pct c/ 1 und","vlr":0.54},
        {"qtde":45,"descricao":"Refis de esfregão","vlr":8.84},
        {"qtde":7,"descricao":"Sabão em pó 5kg caixa","vlr":9.52},
        {"qtde":3,"descricao":"kit MOP (balde + torcedor de esfregão)","vlr":280.06},
        {"qtde":8,"descricao":"Vassouras comum","vlr":6.33},
        {"qtde":2,"descricao":"Vassourão para calçada","vlr":9.68},
        {"qtde":5,"descricao":"Rodo","vlr":6.33},
        {"qtde":15,"descricao":"Cabos de esfregão","vlr":14.98},
        {"qtde":5,"descricao":"Galão de limpa-vidro 5 litros","vlr":6.51},
        {"qtde":20,"descricao":"Alcool gel caixa c/ 10 und","vlr":40.64},
        {"qtde":100,"descricao":"rolos papel higienico 100mts","vlr":7.63},
        {"qtde":250,"descricao":"papel toalha seca mão pct c/ 500fls","vlr":7.12}
    ];
    let tabela = document
                    .getElementById("tabelas")
                    .getElementsByTagName('table')[0]
    let todoSomatorio = 0;
    dadosFakeAPI.map(function (data){
        let novaLinha = document.createElement('tr')
        let coluna = [
            novaLinha.appendChild(document.createElement('td')), // Qtde
            novaLinha.appendChild(document.createElement('td')), // Descrição
            novaLinha.appendChild(document.createElement('td')), // Vlr unitário
            novaLinha.appendChild(document.createElement('td')), // Vlr Total
        ];
        coluna[0].innerHTML = data.qtde;
        coluna[1].innerHTML = data.descricao;
        coluna[2].innerHTML = data.vlr.toLocaleString('pt-br',{style:'currency',currency:'BRL'});
        coluna[3].innerHTML = (data.qtde * data.vlr).toLocaleString('pt-br',{style:'currency',currency:'BRL'});
        todoSomatorio += data.qtde * data.vlr;
        for(let posicaoColuna = 0; posicaoColuna < 4; ++posicaoColuna){
            novaLinha.appendChild(coluna[posicaoColuna]);
        }
        tabela
            .getElementsByTagName('tbody')[0]
            .appendChild(novaLinha);
        tabela
            .getElementsByTagName('tfoot')[0]
            .getElementsByTagName('td')[0]
            .innerHTML = todoSomatorio.toLocaleString('pt-br',{style:'currency',currency:'BRL'});
    });
}