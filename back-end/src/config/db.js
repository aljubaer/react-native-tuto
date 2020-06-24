import mongoose from 'mongoose';

import { DB_URL } from '../constants/index';

mongoose.Promise = global.Promise;

mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);

try {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} catch (error) {
    mongoose.createConnection(DB_URL, {
        useNewURlParser: true,
        useUnifiedTopology: true
    });
}

mongoose.connection
    .once('open', () => {
        console.log('MongoDB running')
    })
    .on('error', err => {
        throw err;
    })