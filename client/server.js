import express from 'express'
import path from 'path'

const app = express()

app.use( express.static(path.join(process.cwd(), 'public')) )

app.get('/login', (req,res) => {
    res.sendFile(path.join(process.cwd(), 'views', 'login.html'))
})
app.get('/add', (req,res) => {
    console.log(req.body)
    res.sendFile(path.join(process.cwd(), 'views', 'addData.html'))
})


app.listen(4000, () => console.log(`http://localhost:4000`))