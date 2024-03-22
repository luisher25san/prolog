function mostrarIntervalo() {
    var start = parseInt(document.getElementById("start").value);
    var end = parseInt(document.getElementById("end").value);
  
    if (!isNaN(start) && !isNaN(end) && start <= end) {
      var intervaloInclusivo = [];
      for (var i = start; i <= end; i++) {
        intervaloInclusivo.push(i);
      }
      document.getElementById("intervaloInclusivo").innerHTML = "<p>Intervalo Inclusivo: " + intervaloInclusivo.join(", ") + "</p>";
  
      var intervaloExclusivo = [];
      for (var i = start; i < end; i++) {
        intervaloExclusivo.push(i);
      }
      document.getElementById("intervaloExclusivo").innerHTML = "<p>Intervalo Exclusivo: " + intervaloExclusivo.join(", ") + "</p>";
  
      var resultado1 = intervaloInclusivo.includes(3) ? "Sí" : "No";
      document.getElementById("resultado1").innerHTML = "<p>¿El intervalo inclusivo incluye el número 3? " + resultado1 + "</p>";
  
      var resultado2 = intervaloExclusivo.includes(end) ? "Sí" : "No";
      document.getElementById("resultado2").innerHTML = "<p>¿El intervalo exclusivo incluye el número " + end + "? " + resultado2 + "</p>";
  
      var resultado3 = "Iteración sobre el intervalo inclusivo: " + intervaloInclusivo.join(", ");
      document.getElementById("resultado3").innerHTML = "<p>" + resultado3 + "</p>";
    } else {
      alert("Por favor, introduce un rango válido.");
    }
  }
  