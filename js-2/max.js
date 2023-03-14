// escribe la función max acá
function max(arreglo) {
  if (arreglo.length === 0) {
    return undefined;
  }
  let numeromayor = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > numeromayor) {
      numeromayor = arreglo[i];
    }
  }
  return numeromayor;
}



console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined