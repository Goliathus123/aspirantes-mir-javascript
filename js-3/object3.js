//1
let receta = {};
//2
receta.nombre = "Sandwich";
//3
receta.ingredientes = [];
//4
receta.ingredientes.push({nombre: "Pan", cantidad: 2});
//5
receta.ingredientes.push({nombre: "Queso", cantidad: 1});
//6
console.log(receta.ingredientes[0].nombre); 
//7
let total = 0;
receta.ingredientes.forEach(ingrediente => {
  total += ingrediente.cantidad;
});

console.log("Cantidad total de ingredientes= " + total); 