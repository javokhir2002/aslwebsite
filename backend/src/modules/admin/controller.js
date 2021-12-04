import model from '../admin/model.js'
import jwt from '../../lib/jwt.js'

export default {
    get: async (_,res) => {
        try {
            let data = await model.get()
            if(data.length){
                res.json({
                    status: 200,
                    data
                })
            }else throw new Error('404')
        } catch (error) {
            console.log(error)
        }
    },
    post: async (req,res,next) => {
        try {
            console.log(req.body)
            let status = jwt.verify(req.cookies.status) 
            if(status == 'super'){
                let data = await model.post(req.body)
                if(data.length){
                    res.json({
                        status: 201,
                        message: 'ADMIN ADDED !!!',
                        data
                    })
                }
            }else throw new Error('404')
        }catch (error) {
            console.log(error)
        }
    },
    put: async (req,res,next) => {
        try {
            let data = await model.put(req.body)
            if(data.length){
                res.json({
                    status: 200,
                    message: 'ADMIN UPDATED !!!',
                    data
                })
            }else throw new Error('404')
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req,res,next) => {
        try {
            let data = await model.delete(req.body)
            if(data.length){
                res.json({
                    status: 201,
                    message: 'ADMIN DELETED !!!',
                    data
                })
            }else throw new Error('404')
        } catch (error) {
            console.log(error)
        }
    },
    login: async (req,res,next) => {
       
        try {
            let data = await model.login(req.body) 
            console.log(req.body)
            
            console.log(data[0]);
            let token = jwt.sign(data[0].admin_id)
            let status = jwt.sign(data[0].status)
            if(data.length){
                res.cookie('admin_id', token)
                res.cookie('status', status)
              
                res.redirect('http://localhost:4000/add')
            }else throw new Error('404')
        } catch (error) {
            console.log(error)
        }
    }
}  