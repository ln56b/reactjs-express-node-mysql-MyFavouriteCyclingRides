const express = require('express');
const api = require('./routes/index.js');

const app = express();
const port = 5000;

app.use('/api', api);

app.listen(port, (err) => {
	if (err) {
		throw new Error('Impossible connection to the port');
	}
});
