window.onload = function () { alert('Bienvenido'); }
window.onunload = function () { alert('Te esperamos de vuelta'); }

function resultado() {
    var r1, r2, r3, r4, r5, nota;
    // Pregunta 1
    if (document.getElementById('p11').checked == true) { r1 = 1 }
    else { r1 = 0 }
    // Pregunta 2
    if (document.getElementById('p22').checked == true) { r2 = 1 }
    else { r2 = 0 }
    // Pregunta 3
    if (document.getElementById('p33').checked == true) { r3 = 1 }
    else { r3 = 0 }
    // Pregunta 4
    if (document.getElementById('p44').checked == true) { r4 = 1 }
    else { r4 = 0 }
    // Pregunta 5
    if (document.getElementById('p51').checked == true) { r5 = 1 }
    else { r5 = 0 }

    nota = r1 + r2 + r3 + r4 +r5;
    alert(" Aciertos totales: " + nota);
}
function reiniciar(){
    alert("Se reiniciara tu pagina")
    location.reload();
}



