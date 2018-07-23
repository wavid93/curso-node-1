const fs = require('fs');
//const fs = require("express"); //express son paquetes no nativos de node
//const fs = require("./path"); paquetes/archivos nuestros


let base = 6;
let data = "";

let crearArchivo = ( base, limite = 10 ) => {

    return new Promise( (resolve, reject) => {
        if(!Number(base) ) {
            reject(`El valor introducido pasado por parametro no es un número (${base})`);
            return;
        }

        for (var i = 1; i <= limite; i++) {
            //var result = base * i;
            data += `${ base } * ${ i } = ${ base * i } \n`;
            //console.log(result);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`The file has been saved!`)
        });

    });
}

let listarTabla = (base, limite) => {

    return new Promise ((resolve, reject) => {
        if(!Number(base) ) {
            reject(`El valor introducido pasado por parametro no es un número (${base})`);
            return;
        }

        for (var i = 1; i <= limite; i++) {
            //var result = base * i;
            data += `${ base } * ${ i } = ${ base * i } \n`;
            //console.log(result);
        }
            console.log(data)
            //resolve(data) Con resolve "retornariamos" la data a donde se llama a la funcion listarTabla y podremos manejarlo alli



    })


}


module.exports = { //Con esto añades al modulo genreal (module) la propiedad crearArchivo que en este caso es una funcion. Este modulo se puede usar desde donde quieras
    crearArchivo,
    listarTabla
}

