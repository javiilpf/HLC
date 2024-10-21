/**
 * @description Calculadora
 */
const sumar=(a=0, b=0)=> a+b;
const restar =(a=0, b=0)=> a-b;
const multiplicar =(a=0, b=0)=> a*b;
const dividir =(a=0, b=0)=> b? a/b: "No se puede dividir por 0";
const modulo=(a=0, b=0)=> b? a%b: "No se puede dividir por 0";
 // Exportación con *********** CommonJS ***************
 // module.exports={sumar, restar, multiplicar, dividir, modulo}

//  const calculadora={
//     sumar:sumar, 
//     restar: restar, 
//     multiplicar: multiplicar,
//     dividir: dividir,
//     modulo: modulo
//  };
 //ES6
const calculadora={
    sumar, 
    restar, 
    multiplicar,
    dividir,
    modulo
};

 module.exports = calculadora; // Exportación con -----COMMONJS--------


// EJERCICIO 01: fs para crear un archivo llamado datos1.txt y que almacene:
//la información "loren ipsum dolor sit amet, consectetur adipiscing elit."

//importar la librería de fs con el método tradicional.
const fs= require('fs');
export const ejercicio01=(textToSave)=>{
    //fs => File System
    fs.writeFile('datos1.txt', textToSave, (err)=>{
        if(err)throw err;
        console.log('Archivo creado y salvado');
    })
}

// EJERCICIO02: Leer el archivo datos1.txt y motrar su contenido en una consola.
// readFile

export const leerArchivo=(archivo)=>{
    fs.readFile(archivo, 'utf8', (err, data)=>{
        if (error)throw error;
        console.log(data);
    })
}

// EJERCICIO03: Renombrar el archivo datos1.txt a datos2.txt

// EJERCICIO06: Utilizando la variable uusuarios del fichero del fuchero usuarios.js
// Se pide:
// Crear un archivo llamado usuarios.txt
// que almacene los post de los usuarios con id 1 y 2


// EJERCICIO07: Utilizando la variable de usuarios del fichero usuarios.js se pide:
// Crear una función que le pase como parámetro un id de usuario y devuelva los post de los usuarios.
// Además creará un fichero llamado usuario_id con los post del usuario.

//Crear usuarios.js con la información de la siguiente página con control a, control v
// https://jsonplaceholder.typicode.com/posts