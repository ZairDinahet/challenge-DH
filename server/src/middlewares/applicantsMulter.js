const multer = rquire('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../../client/src/assets/img'))
    },

    filename: function (req, file, cb) {
      const newFilename = `applicants-${Date.now()}${path.extname(file.originalname)}` 
      cb(null,newFilename)
    }
})

const upload = multer({ storage })


module.exports = upload
