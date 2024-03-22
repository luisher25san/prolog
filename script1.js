function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
      var resultado = num1 + num2;
      document.getElementById("result1").innerText = resultado;
    } else {
      document.getElementById("result1").innerText = "Ingrese números válidos.";
    }
  }
  