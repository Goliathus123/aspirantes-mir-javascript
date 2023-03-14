// escribe la función maxIndex acá
function maxIndex(arreglo) {
  if (arreglo.length === 0) {
    return -1;
  }
  let numeromayor = arreglo[0];
  let indice = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > numeromayor) {
      numeromayor = arreglo[i]; 
      indice = i;

    }
  }
  return indice;
}


console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1