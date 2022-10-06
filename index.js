import materias from './materias.js'
//1. recorrido de arreglo: forEach

materias.forEach((materia)=>{
    if(materia.profesor === "Daniel Rincon")
    console.log(`Materia:${materia.name}`)
    if(materia.profesor === "Daniel Rincon")
    console.log(`Notas:${materia.notas}`)
 
})
//2. Arreglo de profesores
//map()

let profesor = materias.map(function(materia){
    return materia.profesor
})
console.log(profesor)
//3. Agregar una materia al arreglo de materias
//push
materias.push({
    id:5,
    name:"Cultura Fisica",
    profesor:"Luis Vaquero",
    notas:[2,3.5]
})
console.log(materias)

//4. Busqueda en arreglos: 
//find
materias.find(function(materia){
    return materia.profesor === "Daniel Rincon"
    
})
console.log(PHP)


//Traer la dependecia del componenete suma con el common
import {sumar, restar} from './sumar.js'

//let: variables
let a= 10;
//const: constantes
const b =29;

console.log(`suma de a + b :${sumar(a, b)}`);
console.log(`resta de a - b :${restar(a, b)}`);


console.log("Hola! el proyecto esta funcionando");




