const colors = require('colors');
const { crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const { required } = require('yargs');


console.clear();

// @multiplicar.js
crearArchivo( argv.base, argv.until, argv.l )
    .then( nombreArchivo => console.log( nombreArchivo.yellow , 'creada'.red))
    .catch( error => console.log('Error ', error) );

