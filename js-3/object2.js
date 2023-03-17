
const persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Ciudad de México",
  profesion: "Ingeniero"
};


console.log(persona);


function presentacion(obj) {
  return `Hola, mi nombre es ${obj.nombre}, tengo ${obj.edad} años y vivo en ${obj.ciudad}.`;
}


const mensaje = presentacion(persona);


console.log(mensaje);


persona.hobbies = ["correr", "leer", "viajar"];


console.log(persona.hobbies);

a
for (let i = 0; i < persona.hobbies.length; i++) {
  console.log(persona.hobbies[i]);
}

