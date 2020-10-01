var i = 0;
var cont = 2;

var idade = [17, 20, 10, 20, 25, 15, 14, 11, 22, 24,
			 18, 20, 16, 20, 15, 20, 25, 15, 14, 11,
			 10, 20, 10, 20, 25, 17, 20, 10, 20, 25,
			 10, 20, 10, 20, 25, 16, 20, 15, 20, 25,
			 10, 20, 10, 20, 25];

var sexo = ['M', 'F', 'M', 'F', 'M', 'M', 'F', 'M', 'F', 'M',
			'M', 'F', 'M', 'F', 'M', 'M', 'F', 'M', 'F', 'M',
			'M', 'F', 'M', 'F', 'M', 'M', 'F', 'M', 'F', 'M',
			'M', 'F', 'M', 'F', 'M', 'M', 'F', 'M', 'F', 'M',
			'M', 'F', 'M', 'F', 'M'];

var opiniao = [1, 2, 4, 3, 1, 2, 4, 3, 1, 2,
			   1, 2, 4, 3, 1, 2, 4, 3, 1, 2,
			   1, 2, 4, 3, 1, 2, 4, 3, 1, 2,
			   1, 2, 4, 3, 1, 2, 4, 3, 1, 2,
			   1, 2, 4, 3, 1];

var mediaIdade = 0;
var maiorIdade = 0;
var menorIdade = 100;
var qntPessimo = 0;
var qntOtimo = 0;
var qntBom = 0;
var qntMasc = 0;
var qntFem = 0;

for (j = 0; j < idade.length; j++) {
	mediaIdade += idade[j];
	if (idade[j] > maiorIdade) {maiorIdade = idade[j];}
	if (idade[j] < menorIdade) {menorIdade = idade[j];}
	if (opiniao[j] == 1) {qntPessimo += 1;}
	if (opiniao[j] == 4) {qntOtimo += 1;}
	if (opiniao[j] == 3) {qntBom += 1;}
	if (sexo[j] == 'M') {qntMasc += 1;}
	if (sexo[j] == 'F') {qntFem += 1;}
}

mediaIdade /= idade.length;

console.log('A idade média é: ' + mediaIdade);
console.log('A maior idade é: ' + maiorIdade);
console.log('A menor idade é: ' + menorIdade);
console.log('A quantidade de respostas péssimo é : ' + qntPessimo);
console.log('A porcentagem de respostas ótimo é : ' + (qntOtimo / opiniao.length) * 100 + ' %');
console.log('A porcentagem de respostas bom é : ' + (qntBom / opiniao.length) * 100 + ' %');
console.log('A quantidade de mulheres que responderam são: ' + qntFem);
console.log('A quantidade de homens que responderam são: ' + qntMasc);