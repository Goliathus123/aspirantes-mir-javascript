function join(arreglo) {
  let string = "";
  for (let i = 0; i < arreglo.length; i++) {
    string += arreglo[i];
    if (i < arreglo.length - 1) {
      string += " ";
    }
  }
  return string;
}

console.log(join([1,2,3,4,5,6]))
