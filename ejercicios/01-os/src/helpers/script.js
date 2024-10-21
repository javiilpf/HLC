const os = require("os");
const infoSO= ()=>{
    const dataInfo=[
        {name: 'Plataforma', value: os.platform()},
        {name: 'Arquitectura', value: os.arch()},
        {name: 'CPUs', value: os.cpus()},
        {name: 'Free Memory', value: os.freemen()},
        {name: 'Hostname', value: os.hostname()},
    ];
    return dataInfo;
    
}

module.exports = {infoSO}; //<-- Exportamos la funcion

//mostrar en console.log todos los valores anteriores.