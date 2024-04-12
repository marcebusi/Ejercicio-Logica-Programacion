let datos = [1, 3, 2, 4, 2, 1, 3];
let datos2 = [6, 2, 7, 3, 6, 2, 3];

function cargarDatos(datos, datosId) {
  let datosString = "{" + datos.join(", ") + "}";
  document.getElementById(datosId).textContent = datosString;
}

function verificarEstado(datos, resultadoId) {
  let numeroUnico = encontrarNumeroUnico(datos);
  if (numeroUnico !== null) {
    mostrarResultado("El número único es: " + numeroUnico, resultadoId);
  } 
}

function encontrarNumeroUnico(array) {
  for (let i = 0; i < array.length; i++) {
    let valor = array[i];
    let numUnico = true;
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[j] === valor) {
        numUnico = false;
        break;
      }
    }
    if (numUnico) {
      return valor;
    }
  }
  return null;
}

function mostrarResultado(mensaje, elementoId) {
  document.getElementById(elementoId).textContent = mensaje;
}

cargarDatos(datos, "datos");
cargarDatos(datos2, "datos2");
verificarEstado(datos, "resultado");
verificarEstado(datos2, "resultado2");