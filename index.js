
const form = document.getElementById("formulario")
var linhas = '';

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const numeroTelefone = document.getElementById("numeroTelefone")
    const nomeContato = document.getElementById("nomeContato")

    let linha = "<tr>"

    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroTelefone.value}</td>`;

    linha += "<tr>";

    linhas += linha;

    const tabela = document.querySelector("tbody");

    tabela.innerHTML= linhas
})