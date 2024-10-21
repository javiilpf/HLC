/**
 * @description: Programa que permita manejar la E/S de una data usuarios.json a través de un menú.
 * La data será {nombre: String, edad: number}
 * el programa permitirá:
 * -Agregar un usuario.
 * - Listar usuarios
 * - Salir
 * 
 * *** Buscar un usuario por nombre.
 * *** Eliminar usuario por nombre
 * 
 * Dependencias: colors, js, readline-sync
 * 
 * 
 * 
 * // npm install colors
 * npm install chalk
 * 
 * touch .gitignore
 * 
 * const colors = require("colors");
 * const fs = require("fs");
 * const 
 * 
 * console.clear();
 * 
 * 
 * 
 * 
 */
//--------------DECLARACION DE VARIABLES--------------
const pathUserData="./data/usuarios.json";
//---------------DECLARACIÓN DE FUNCIONES -----------------------
const colors = require("colors");
const fs = require("fs");
const readLine = require("readline-sync");
function addUser(){
    //debe pedir el nombre de un usuario.
    //Si el usuario ya existe, debe mostrar un mensaje de error.
    // Si no existe, debe pedir la edad del usuario.
    // Guardar el usuario en el archivo usuarios.json
    console.clear();
    // pedimos un nombre por pantalla.
    const name= readLine.question("Ingrese el nombre del usuario: ".yellow);
    // ?¿<----searchUser(name)
};
 
function loadDataJSON(){}
    //Cargamos del fichero usuarios.json los datos en una variable.
    try{
        const data= fs.readFileSync("pathUserData", "utf-8");
        return JSON.parse(data);
    }catch{
        console.error("Error al leer el fichero de usuarios", error);
    }
function saveDataJSON(){}
    
function listUsers(){}
 
function searchUsers(findUser){
    //llamo a la funcion loadDataJSON
    //terminar para el martes
    
    
    
}
 
function deleteUser(){}
 
function menu(){
    console.clear();
    console.log("================================================".green);
    console.log("         Aplicación de Usuarios".green);
    console.log("1. Agregar usuario".green);
    console.log("2. Listar usuarios".green);
    console.log("3. Salir".green);

    const option = readLine.questionInt("Seleccione una opción: (1,2,3) ".yellow);
    switch (option) {
        case 1:
            addUser();
            break;
        case 2:
            listUsers();
            break;
        case 3:
            console.log("Saliendo....".green);
            return false;
        default:
            console.log("Opción no válida".red);
            break;
    }

}

// ------------INICIO APLICACIÓN------------
menu();
