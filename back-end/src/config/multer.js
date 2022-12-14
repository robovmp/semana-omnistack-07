const path = require( 'path' );
const multer = require( 'multer' );

// const storage = multer.diskStorage({

//     destination: function ( req, file, cb ){
//         cb( null, path.resolve(__dirname, '..', '..', 'uploads') )
//     },
//     filename: function ( req, file, cb ){
//         cb(null, file.originalname)
//     }
// })

// module.exports = storage


module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb) {
            cb(null, file.originalname)
        }
    })
}
