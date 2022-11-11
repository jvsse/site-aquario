function calcular_l() {
  var e1 = parseInt(document.getElementById("comprimento").value);
  var e2 = parseInt(document.getElementById("altura").value);
  var e3 = parseInt(document.getElementById("largura").value);
  document.getElementById("resp_l").innerHTML = "Resposta: " + (e1 * e3 * e2 / 1000) + " L";
}

function calcular_v() {
  var e1 = parseInt(document.getElementById("comprimento").value);
  var e2 = parseInt(document.getElementById("altura").value);
  var e3 = parseInt(document.getElementById("largura").value);
  document.getElementById("resp_v").innerHTML = "Resposta: " + (e1 * e3 * e2 / 1000) * 5 + " W";
}

function termostato() {

  var e1 = parseInt(document.getElementById("comprimento").value);
  var e2 = parseInt(document.getElementById("altura").value);
  var e3 = parseInt(document.getElementById("largura").value);
  e4 = e1 * e3 * e2 / 1000;

  if (e4 >= 0 && e4 <= 50) {
    document.getElementById("termostato").innerHTML = "Resposta: Termostato de 25W";
    } else if (e4 <= 50 && e4 >= 50) {
      document.getElementById("termostato").innerHTML = "Resposta: Termostato de 50W";
    } else if (e4 <= 150 && e4 >= 50) {
      document.getElementById("termostato").innerHTML = "Resposta: Termostato de 100W";
    } else if (e4 <= 200 && e4 >= 150) {
      document.getElementById("termostato").innerHTML = "Resposta: Termostato de 150W";
    } else if (e4 <= 300 && e4 >= 200) {
      document.getElementById("termostato").innerHTML = "Resposta: Termostato de 200W";

    } else {
      (e4 <= 200 && e4 >= 300)
      document.getElementById("termostato").innerHTML = "Resposta: Termostato de 300W"; 
    }
  }