require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const helmet = require('helmet');
//LOCAL IMPORTS
const { respond } = require('./util');

const PORT = process.env.PORT || process.env.APP_PORT;

mongoose.connect('mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@pascolan-hvjl4.mongodb.net/'+process.env.DB_NAME+'?retryWrites=true&w=majority', { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => console.log('[DB] Database connection successful'))
    .catch(err => {
        console.log('[!DB] '+err);
        console.log('[!DB] Exiting...');
        process.exit();
    });

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(helmet());

app.get('/', (request, response) => respond(null, 'All API requests should be made to /api/v1 endpoint', request, response));

require('./routes/employee.routes')(app);
app.listen(PORT, '0.0.0.0', () => console.log('[SERVER] Listening on port '+PORT));
