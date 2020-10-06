const express = require('express');
const api = require('./routes/index.js');

const app = express();
const port = 5000;

app.use('/api', api);

const db = require('./models');
db.sequelize.sync();

const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(port, (err) => {
	if (err) {
		throw new Error('Impossible connection to the port');
	}
});
