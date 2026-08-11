console.log("Portfólio carregado com sucesso!");
const textos = [
    "Desenvolvedor Web",
    "Programador PHP",
    "Designer Gráfico",
    "UI/UX Designer"
];

let indiceTexto = 0;
let indiceLetra = 0;
let apagando = false;

const elemento = document.getElementById("typing");

function escrever() {

    const texto = textos[indiceTexto];

    if (!apagando) {

        elemento.innerHTML = texto.substring(0, indiceLetra++);

        if (indiceLetra > texto.length) {

            apagando = true;

            setTimeout(escrever, 1500);

            return;
        }

    } else {

        elemento.innerHTML = texto.substring(0, indiceLetra--);

        if (indiceLetra < 0) {

            apagando = false;

            indiceTexto++;

            if (indiceTexto >= textos.length)
                indiceTexto = 0;

        }

    }

    setTimeout(escrever, apagando ? 50 : 100);

}

escrever();