
// Cuenta de un cliente con modal
document.getElementById('showResults').addEventListener('click', function () {

    const valorComida = parseFloat(document.getElementById('comida').value) || 0;
    const valorBebida = parseFloat(document.getElementById('bebida').value) || 0;
    const valorPostre = parseFloat(document.getElementById('postre').value) || 0;
    const valorEntraditas = parseFloat(document.getElementById('entraditas').value) || 0;


    // calcular totales
    const valorTotal = valorComida + valorBebida + valorPostre + valorEntraditas;
    const deducirIva = valorTotal * 0.19;
    const totalConIva = valorTotal + deducirIva;
    const propina = valorTotal * 0.10;
    const totalConPropina = totalConIva + propina;

    // Mostrar resultados en el modal
    const results = `
        <p>Gasto en comida: $${valorComida}</p>
        <p>Gasto en bebida: $${valorBebida}</p>
        <p>Gasto en postre: $${valorPostre}</p>
        <p>Gasto en entraditas: $${valorEntraditas}</p>
        <p>IVA: $${deducirIva}</p>
        <p>Usted se tragó un total de: $${totalConIva}</p>
        <p>Propina sugerida (10%): $${propina}</p>
        <p>Total con propina: $${totalConPropina}</p>
    `;
    document.getElementById('results').innerHTML = results;

    // Mostrar el modal
    const modal = document.getElementById('modal');
    modal.style.display = "block";

    // Cerrar el modal
    document.getElementsByClassName('close')[0].onclick = function () {
        modal.style.display = "none";
    }

    // Cerrar el modal cuando el usuario haga clic fuera de él
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
