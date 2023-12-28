const { alias, options } = require('yargs');

// options
const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: "Base numérica para obtener la tabla"
})
.option('u', {
    alias: 'until',
    type: 'number',
    demandOption: false,
    default: 10,
    describe: "Multiplica hasta este número"
})
.option('l', {
    alias: 'list',
    type: 'boolean',
    demandOption: false,
    default: true,
    describe: "Muestra la tabla en consola"
})
.check( (argv, options)  => {
    if( isNaN( argv.b ) ) {
        throw 'Base is not a number'
    }
    return true;
})
.argv;

module.exports = argv;
