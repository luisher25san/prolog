class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      if (this.root === null) {
        this.root = new Node(value);
      } else {
        this.insertRecursive(this.root, value);
      }
    }
  
    insertRecursive(node, value) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
        } else {
          this.insertRecursive(node.left, value);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = new Node(value);
        } else {
          this.insertRecursive(node.right, value);
        }
      }
    }
  
    display() {
      return this.root !== null ? this.displayRecursive(this.root) : "Árbol vacío";
    }
  
    displayRecursive(node) {
      let result = "";
      if (node !== null) {
        result += this.displayRecursive(node.left);
        result += node.value + " ";
        result += this.displayRecursive(node.right);
      }
      return result;
    }
  }
  
  let arbolBinario = new BinaryTree();
  
  function insertarNodo() {
    let nodeValue = parseInt(document.getElementById("nodeValue").value);
    if (!isNaN(nodeValue)) {
      arbolBinario.insert(nodeValue);
      document.getElementById("nodeValue").value = "";
      alert("Nodo insertado correctamente.");
    } else {
      alert("Por favor, introduce un valor numérico para el nodo.");
    }
  }
  
  function mostrarArbol() {
    let arbolHTML = arbolBinario.display();
    document.getElementById("arbolBinario").innerHTML = "<p>Árbol Binario: " + arbolHTML + "</p>";
  }
  