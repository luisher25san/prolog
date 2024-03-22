function factorial(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  function calculateFactorial() {
    var number = parseInt(document.getElementById("number").value);
    
    if (!isNaN(number)) {
      var result = factorial(number);
      document.getElementById("result3").innerText = result;
    } else {
      document.getElementById("result3").innerText = "Ingrese un número válido.";
    }
  }
  