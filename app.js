let express = require('express');
let app = express();
let mongoose = require('mongoose');
let config = require('./config');
let setUpController = require('./controllers/setUpController');
let port = process.env.port || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());

setUpController(app);

app.listen(port);