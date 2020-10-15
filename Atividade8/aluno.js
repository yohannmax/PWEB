var Aluno1 = new Object();
    Aluno1.ra = '123456789';
    Aluno1.nome = 'José';

var Aluno1 = {
    ra: '987654321',
    nome: 'Zé'
};

function AlunoF(ra, nome) {
    this.ra = ra;
    this.nome = nome;
}
var Aluno1 = new AlunoF('111222333','zézin')
