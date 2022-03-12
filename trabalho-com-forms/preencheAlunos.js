var vlrDiariaHospede = 35.69;
let alunos = [
    {"matricula": 201903319153, "nome": "Leonardo Nicolas Sales Dias"},
    {"matricula": 202102283388, "nome": "Joubert Lima Correa de Oliveira"},
    {"matricula": 202003567418, "nome": "Gustavo martins Barbosa"},
    {"matricula": 202102212812, "nome": "Jhonata Goncalves Antunes"},
    {"matricula": 202102212685, "nome": "Emmanuel Machado de Oliveira"},
    {"matricula": 202002457392, "nome": "Flávio Gomes de Almeida Filho"}
];

function preencherAlunos(){
    let divDeAlunos =  document.getElementById("alunos");
    for(let posicao=0;posicao<alunos.length;++posicao){

        let alunoEl = document.createElement('dd');
        alunoEl.innerHTML = alunos[posicao].matricula.toString() + " - " + alunos[posicao].nome;
        divDeAlunos.appendChild(alunoEl);
    }
}

function mudancaInput(obj,selector) {
    document.getElementById(selector).innerHTML = obj.value < 10 ? "0" + obj.value.toString() : obj.value;
}
function realizaCalculo(){
    let qtdHospede = document.getElementById('numero-hospedes').value;
    let numNoites = document.getElementById('numero-noites').value;
    document.getElementById('valor-por-hospede-e-noite').innerHTML = vlrDiariaHospede.toLocaleString('pt-br',{style:'currency',currency:'BRL'});
    document
        .getElementById('total-estimado')
        .innerHTML = (
            (vlrDiariaHospede * numNoites)
            * qtdHospede
        )
        .toLocaleString('pt-br',{
            style:'currency',
            currency:'BRL'
        });
}
