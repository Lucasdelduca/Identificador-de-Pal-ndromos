function coletarPalavra() 
{
    let palavra = document.getElementById("palavra").value;
    return palavra;
}

function verificarPalavra(palavra) 
{
    let palavraCorrigida = palavra.replace(/\s+/g, '').toLowerCase();
    let palavraInvertida = palavraCorrigida.split('').reverse().join('');
    return palavraCorrigida === palavraInvertida;
}

function resultado() 
{
    let palavra = coletarPalavra();
    let resultadoDiv = document.getElementById('resultado');
    if (verificarPalavra(palavra)) {
        resultadoDiv.textContent = "A palavra é um palíndromo.";
    } else {
        resultadoDiv.textContent = "A palavra não é um palíndromo.";
    }
}

function adicionarEvento() 
{
    document.getElementById('verificar').addEventListener('click', resultado);
} 

adicionarEvento();
