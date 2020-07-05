const mongoose = require('mongoose');

const MONGOURI = 'mongodb://127.0.0.1:27017';

const IintiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log('bhai land kra de');
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = IintiateMongoServer;