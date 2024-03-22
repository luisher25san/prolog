class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
      if (this.head === null) {
        this.head = new Node(value);
      } else {
        let current = this.head;
        while (current.nextNode !== null) {
          current = current.nextNode;
        }
        current.nextNode = new Node(value);
      }
    }
  
    addFirst(value) {
      const newNode = new Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  
    display() {
      let current = this.head;
      let result = "";
      while (current !== null) {
        result += current.value + " -> ";
        current = current.nextNode;
      }
      result += "null";
      return result;
    }
  }
  
  let listaEnlazada = new LinkedList();
  
  function agregarNodo() {
    let nodeValue = document.getElementById("nodeValue").value;
    if (nodeValue !== "") {
      listaEnlazada.add(nodeValue);
      document.getElementById("nodeValue").value = "";
      alert("Nodo agregado correctamente.");
    } else {
      alert("Por favor, introduce un valor para el nodo.");
    }
  }
  
  function mostrarLista() {
    let listaHTML = listaEnlazada.display();
    document.getElementById("listaEnlazada").innerHTML = "<p>Lista Enlazada: " + listaHTML + "</p>";
  }
  