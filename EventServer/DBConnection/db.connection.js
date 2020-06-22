require('dotenv').config();
let log = require('../logFile/winston');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:${process.env.DBURL}/Events`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    log.logger.info('Successfully connected to the database');
});
mongoose.connection.on('error', () => {
    log.logger.error('Could not connect to the database. Exiting now...');
});
mongoose.connection.on('disconnected', () => {
    log.logger.info('connection disconnected');
});