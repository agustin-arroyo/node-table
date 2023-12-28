const colors = require('colors');
const fs = require('node:fs');

const crearArchivo = async( base, until, list ) => {
    
            let outputConsole = '';
            let outputFile = '';

            for ( let i = 1; i <=until; i++) {
                outputConsole += `${ colors.white(base) } ${ 'x'.green } ${ colors.white(i) } ${'='.green} ${ colors.yellow(base * i )} \n`;
                outputFile += `${ base } x ${i} = ${ (base * i ) } \n`;
            }

            if( list ) {
                console.log('====================');
                console.log('Tabla del:'.red, colors.yellow(base) );
                console.log('====================');    
                console.log( outputConsole);    
            }

            const fileName = `./tables-files/Tabla-del-${base}.txt`;

            try {
                fs.writeFileSync(fileName, outputFile);
                // console.log("File written successfully");
                return fileName;
            } catch(err) {
                // console.log("File written error");
                throw(err);
            }
            
};

module.exports = {
    crearArchivo
}

