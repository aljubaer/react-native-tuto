import express from 'express';

import middlewareConfig from './config/middleware';
import './config/db';
import { CustomerRoutes } from './modules';

const app = express();

middlewareConfig(app);

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.use('/api/v1/customer', CustomerRoutes);

app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server listening on port 3000`)
});

// 10:00