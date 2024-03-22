function sumaLazy(a, b) {
    return () => a + b;
  }
  
  function calcularSuma() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
  
    if (!isNaN(num1) && !isNaN(num2)) {
      let lazySuma = sumaLazy(num1, num2);
      let resultado = lazySuma();
      document.getElementById("resultado").innerHTML = "<p>El resultado de la suma es: " + resultado + "</p>";
    } else {
      alert("Por favor, introduce números válidos.");
    }
  }
  