const os=require("os");
const { infoSO } = require("helpers/script.js");
console.clear();

console.log(`La arquitectura de tu sistema es: ${os.arch()}`)// <-- Arquitectura del sistema.
console.log(`La plataforma de tu sistema es: ${os.platform()}`) //<-- Plataforma del sistema

console.log(`La plataforma de tu sistema es: ${JSON.stringify(infoSO())}`);

// console.log(`${La plataforma de tu sistema es: JSON.stringify(infoSO()).split(":")[2]}`) /// Opcion mega enrevesada.

const {values} = infoSO()[0];
const {name}= infoSO()[0];
console.log(`La plataforma de tu sistema es: ${value}`);

console.log(`La plataforma de tu sistema es: ${infoSO()[0].value}`);

console.log()
//values.forEach((value, index) => console.log(`La plataforma de tu sistema es: ${JSON.stringify(infoSO()[index].)}}`))


infoSO().foreach(({name, value})=>{
    console.log(`${name}--->${value}`);
})