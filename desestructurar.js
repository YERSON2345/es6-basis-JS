let colors = require('colors');

const estudiantes1 = ["Nicolas Pera","Juan Medina","Yerson Bohorquez"];
const estudiantes2 = ["Maicol Correa","Enrique","Duvan Zapata"];


console.log (estudiantes1[2])

//desestructuracion arreglo

let[NP, JM ,YB] = estudiantes1;
console.log(NP.rainbow,JM.america,YB.bgBlue);

//operador spread(resto)
const estudiantes3 = ['Veronica', ...estudiantes1, 'Paula', ...estudiantes2]
console.log(estudiantes3);