//const argv = require('yargs')

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 66
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts) //Command para declarar comandos propios y sus propiedades, para poder pasarlos via consola)
    .command('crear', 'Crea la tabla en función de los parámetros que pasemos', opts)
    .help() //comando propio de node para mostrar la lista de todos los comandos y opciones
    .argv;


module.exports = { //Con esto añades al modulo genreal (module) la propiedad crearArchivo que en este caso es una funcion. Este modulo se puede usar desde donde quieras
    argv
}