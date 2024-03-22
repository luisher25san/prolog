// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Problema 1
    var result1 = suma(1, 3); // Ejemplo de resultado para problema 1
    document.getElementById("result1").innerText = result1;
  
    // Repite este patrón para cada problema
  });
  
  var result2 = factorial(5); // Ejemplo de resultado para problema 2
  document.getElementById("result2").innerText = result2;

  //problema 2
  var result3 = applyOperation(5, 3, add); // Ejemplo de resultado para problema 3 (sumar)
  document.getElementById("result3").innerText = result3;

  var result4 = applyOperation(5, 3, subtract); // Ejemplo de resultado para problema 3 (restar)
  document.getElementById("result4").innerText = result4;


  function suma(a, b) {
    return a + b;
  }
  
  
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function applyOperation(a, b, operation) {
    return operation(a, b);
  }
  
  // Funciones de operación
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
