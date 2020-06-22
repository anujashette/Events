const winston = require('winston');
const { format } = winston;
const { combine, timestamp, prettyPrint } = format;

const myCustomLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        verbose: 3,
        debug: 4,
        silly: 5
    },
    colors: {
        error: 'red',
        warn: 'red',
        info: 'green'
    }
};

const Consoletransport = new winston.transports.Console({ level: 'info'});
const Filetransport = new winston.transports.File({ filename: 'logger', level: 'error' });
module.exports.logger =
     winston.createLogger({
    levels: myCustomLevels.levels,
    transports: [Consoletransport,
        Filetransport,
    ],
    format: combine(
        timestamp(),
        prettyPrint()
    )});