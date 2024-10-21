/**
 * @description: Bloqueo de código síncrono
 * 
 */
// ------------Importaciones-----------------
const fs=require("fs");

//Declaracion de variables

//Declaración de funciones

// Ejecución
console.log("Esto se ejecuta en primer lugar");
const data= fs.readFileSync("./info.txt", "utf-8");
console.log("data -->", data);
console.log("Esto se ejecuta al final");