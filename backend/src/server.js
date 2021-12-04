import formData from 'express-form-data'
import fileupload from 'express-fileupload'
import router from './modules/index.js'
import cookieParser from 'cookie-parser'
import { PORT } from './config.js'
import express from 'express'




const app = express()


// middilwares
app.use(cookieParser())
app.use(express.json())
app.use( express.urlencoded({extended: true}) )
app.use(fileupload())
app.use(formData.parse())


app.use(router)





app.listen(PORT, () => {
    console.log(`server run http://localhost:${PORT}`)
})