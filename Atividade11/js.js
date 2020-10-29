let upper = document.getElementById("maior");
let lower = document.getElementById("menor");

function Maior() {
    if (maior.checked) {
        menor.checked = false;
        var caracter = document.getElementById('entrada').value;
        document.getElementById('entrada').value = caracter.toUpperCase();
    }
}

    function Menor() {
        if (menor.checked) {
            maior.checked = false;
            var caracter = document.getElementById('entrada').value;
            document.getElementById('entrada').value = caracter.toLowerCase();
        }
    }
