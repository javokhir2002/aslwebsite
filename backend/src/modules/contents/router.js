import controller from './controller.js'
import express from 'express'
import multer from 'multer'

// Router
const router = express.Router()

const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, '../../uploads')
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
          cb(null, file.fieldname + '-' + uniqueSuffix)
        }
    })
      
const upload = multer({ storage: storage })
    

// Router methods
router.route('/categories/subcategories/contents',upload.single('avatar'))
        .get(controller.get)
        .post(controller.post)
        .put(controller.put)
        .delete(controller.delete)
        

export default router