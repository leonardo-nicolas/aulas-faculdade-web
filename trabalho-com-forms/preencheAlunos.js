var vlrDiariaHospede = 35.69;
let alunos = [
    {"matricula": 201903319153, "nome": "Leonardo Nicolas Sales Dias"}
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