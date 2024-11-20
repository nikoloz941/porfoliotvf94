function calculer() {
    ['prix1', 'prix2', 'prix3'].forEach((prix, i) => {
        var a = parseFloat(document.getElementById(prix).value) || 0;
        var b = parseInt(document.getElementById('quantite' + (i + 1)).value) || 0;
        document.getElementById('resultat' + (i + 1)).value = a * b;
    });

    var total = ['resultat1', 'resultat2', 'resultat3'].reduce((sum, id) => sum + parseFloat(document.getElementById(id).value), 0);
    document.getElementById("totalTTC").value = total.toFixed(2);
}

function reinitialiser() {
    document.querySelectorAll("input").forEach(input => input.value = 0);
}
