const pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"]
};

// Imprimir valor de la llave edad
console.log(pedro.edad);

// Agregar propiedad estatura
pedro.estatura = 1.8;

// Eliminar propiedad activo
delete pedro.activo;

// Recorrer propiedades y valores del objeto
for (let llave in pedro) {
  console.log(llave + " : " + pedro[llave]);
}

// Agregar función al objeto
pedro.saluda = function() {
  return "Hola, me llamo " + this.nombre;
}

// Llamar la función saluda e imprimir el resultado
console.log(pedro.saluda());