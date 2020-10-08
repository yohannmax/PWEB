var escolhaUsuario = prompt("Escolha entre pedra, papel ou tesoura...");
var escolhaComp = Math.random();

if (escolhaComp < 0.34) {
	escolhaComp = "pedra";
	} 
	else if (escolhaComp <= 0.67) {
		escolhaComp = "papel";
	} else {
		escolhaComp = "tesoura";
	} 

alert("Computador: " + escolhaComp);

var compare = function (escolha1, escolha2) {
	if (escolha1 === escolha2)
	    return ("Empate!")
    else if (escolha1 === "pedra") {
        if (escolha2 === "tesoura")
	        return ("Pedra vence")
        else {
            return ("Papel vence")
        }
    }

    else if (escolha1 === "papel") {
        if (escolha2 === "pedra")
	        return "Papel vence"
        else {
            return "Tesoura vence"
        }
    }

    else if (escolha1 === "tesoura") {
        if (escolha2 === "pedra")
	        return "Pedra vence"
        else {
            return "Tesoura vence"
        }
    }
};

var resp = compare(escolhaUsuario, escolhaComp)
alert(resp)