

const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require(`./multiplicar/multiplicar`); //Importamos nuestro paquete propio que esta en esa ruta

let comando = argv._[0];
switch ( comando) {

    case 'listar':
         listarTabla(argv.base, argv.limite);
             //.then ( listado => console.log(listado) )
             //.catch (e => console.log(e));

     break;
    case 'crear':
          crearArchivo(argv.base, argv.limite)
      .then( archivo => console.log(`Archivo creado: ${ archivo }`))
      .catch(e => console.log(e));
          break;
    default:
        console.log('Comando no reconocido');
}


console.log(argv);


//Arriba se importa la funcion que vamos a usar, crearArchivo
//let base = 10;

//console.log(process.argv );
//let argv2 = process.argv;
//console.log(argv);
//console.log('limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);


//Nos hacemos una function para
//  crearArchivo(base)
//      .then( archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));
