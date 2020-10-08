const multer = require('multer');
const maxSize = 2 * 1024 * 1024;
const util = require('util');

const MIME_TYPES = {
	'image/jpg': 'jpg',
	'image/jpeg': 'jpg',
	'image/png': 'png',
};

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, __basedir + 'images');
	},
	filename: (req, file, callback) => {
		const name = file.originalname.split(' ').join('_');
		const extension = MIME_TYPES[file.mimetype];
		callback(null, name + Date.now() + '.' + extension);
	},
});

const uploadPicture = multer({
	storage: storage,
	limits: { fileSize: maxSize },
}).single('picture');

const uploadPictureMiddlesware = util.promisify(uploadPicture);

module.exports = uploadPictureMiddlesware;
