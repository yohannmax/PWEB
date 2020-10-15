function maior(num1, num2, num3) {
    if (num1 >= num2 && num2 >= num3) {
        return num1
    } else if (num2 >= num3) {
        return num2
    } else { 
        return num3
    }
}

var ent1, ent2, ent3 = 0;

ent1 = prompt("Primeiro número");
ent2 = prompt("Segundo número");
ent3 = prompt("Terceiro número");

alert("Maior número: " + maior(ent1, ent2, ent3));  