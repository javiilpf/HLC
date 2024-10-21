console.log("Esto se ejecuta antes de la tarea programada")
setTimeout(()=>{
    console.log("Esto se ejecuta dentro de 5 segundos")
}, 5000);

setTimeout(()=>{
    console.log("Esto se ejecutará después de 3 segundos")
}, 0);

setTimeout(()=>{
    console.log("Esto se ejecutará después de 3 segundos")
}, 0);

console.log("Esto se ejecuta al final");

// npm init 
// package name: (03_inicode)
// version: (1.0.0)
// description: Ejemplo CommonJS
// entry point: (index.js) app.js
// test command:
// git repository:
// 