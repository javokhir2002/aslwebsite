import model from "./model.js";
import jwt from "../../lib/jwt.js";

export default {
  get: async (req, res) => {
    try {
      let status = jwt.verify(req.cookies.status)
      if(status == "super" || status == 'admin'){
        let data = await model.get()
        if (data) {
          res.json({ status: 200, data})
        }
      } else throw new Error("NO DATA !!!")
    } catch (error) {
      res.json({ status: 401, message: error.message})
    }
  },

  post: async (req, res) => {
    console.log(req.body)
    try {
      let status = jwt.verify(req.cookies.status)
      if (status == "super" || status == 'admin'){
        // let data = await model.post(req.body)
        console.log(data)
        if (data) {
          res.json({ status: 201, message: "ADDED!", data: data})
        }
      } else throw new Error("NO DATA !!!")
    } catch (error) {
      res.json({ status: 401, message: error.message})
    }
  },

  put: async (req, res) => {
    try {
      let status = jwt.verify(req.cookies.status)
      if (status == "super" || status == 'admin') {
        let data = await model.put(req.body)
        if (data) {
          res.json({status: 201, message: "UPDATED!!!", data: data })
        }
      } else throw new Error("NO DATA !!!")
    } catch (error) {
      res.json({ status: 401, message: error.message})
    }
  },

  delete: async (req, res) => {
    try {
      let status = jwt.verify(req.cookies.status)
      if(status == "super" || status == 'admin'){
        let data = await model.delete(req.body)
        if(data){
          res.json({ status: 201, message: "DELETED !!!", data: data});
        }
      } else throw new Error("NO DATA !!!")
    } catch (error) {
      res.json({ status: 401, message: error.message})
    }
  }

};
