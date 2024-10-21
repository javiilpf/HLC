/**´
 * Ejemplo de una calculadora
 */

// FORMA ANTIGUA

// const miCalculadora= require('./helpers/scripts');
// console.log(miCalculadora);// me printea el objeto calculadora.
// console.log (miCalculadora.sumar(2, 3)); // 5
//************************************************************ */ci





//  FORMA MODERNA
// HACIENDO UN DESTRUCTURING DEL OBJETO

const { sumar, restar, multiplicar, dividir, modulo }=require("./helpers/scripts"); // Muy importante dejar un espacio al principio y al final de las llaves
console.log(sumar(2,3));

// npm install nodemon
// npm uninstall nodemon



// EN EL MAIN
// ------------------IMPORTACIONES-------------
const { ejercicio01, leerArchivo } = require("./03_EjercicioInicioNode/helpers/scripts");
// ----------------VARIABLES--------------
// ----------------FUNCIONES--------------
// ----------------INICIO DEL PROGRAMA-------------
// BORRAR LA PANTALLA
console.clear();
ejercicio1("lorem ipsun dolor sit amet, consectetur adispiscing elit. ");
leerArchivo("./");



// EJERCICIO03: Renombrar el archivo datos1.txt a datos2.txt

// EJERCICIO04: Eliminar el archivo datos2.txt

// EJERCICIO05: Crea una carpeta llamada Datos y dentro de ella crea un archivo llamado info.txt qye muestre información del sistema operativo.
