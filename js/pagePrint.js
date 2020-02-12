window.onload = initPage;

function initPage() {
    var valorEscolhido = window.location.search.replace("?", "");
    document.getElementById("escolhido").textContent = valorEscolhido;
}