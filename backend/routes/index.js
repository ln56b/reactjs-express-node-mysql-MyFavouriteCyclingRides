const express = require('express');
const rides = require('./rides');

const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({ message: 'My favourite cycling rides' });
});

router.use('/rides', rides);

module.exports = router;
