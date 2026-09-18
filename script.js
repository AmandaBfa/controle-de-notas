function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    const media = (nota1 + nota2) / 2;

    document.getElementById("media").textContent = media.toFixed(1);

    if (media >= 6) {
        document.getElementById("situacao").textContent = "Aprovado";
    } else {
        document.getElementById("situacao").textContent = "Reprovado";
    }
}