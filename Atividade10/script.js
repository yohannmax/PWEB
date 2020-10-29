const janelaFechada = "./img/janelaFechada.png"
const janelaAberta = "./img/janelaAberta.png"
const janelaQuebrada = "./img/janelaQuebrada.png"

document.addEventListener("DOMContentLoaded", function() {
    const $img = document.querySelector("img")

    $img.src = janelaFechada

    $img.addEventListener("mouseover", () => { $img.src = janelaAberta })

    $img.addEventListener("mouseout", () => { $img.src = janelaFechada })

    $img.addEventListener("click", () => { $img.src = janelaQuebrada })
})