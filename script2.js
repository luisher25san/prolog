var add = function(a, b) { return a + b; };
var subtract = function(a, b) { return a - b; };

function applyOperation() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operation = document.getElementById("operation").value;

  if (!isNaN(num1) && !isNaN(num2)) {
    var result;
    if (operation === "add") {
      result = add(num1, num2);
    } else if (operation === "subtract") {
      result = subtract(num1, num2);
    }
    document.getElementById("result2").innerText = result;
  } else {
    document.getElementById("result2").innerText = "Ingrese números válidos.";
  }
}
