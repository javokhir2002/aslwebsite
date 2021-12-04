import fetch from "../../lib/postgres.js"


import path from 'path'
export default{
    get: async ()=>{
        try {
            return await fetch(false,`select * from contents`)  
        } catch (error) {
            console.error(error);
        }
    },

    post:( req )=>{
        try {
            let { link } = req.files
            let filePath = path.join(process.cwd(),'src','uploads',link.name)
            link.mv(filePath)
            req.body.img = filePath
            let {title, body,img, sub_category_id} = req.body
            return fetch(false,`insert into  contents (title, body, img, sub_category_id) values ($1,$2,$3,$4) returning *`,title, body, img, sub_category_id) 
        } catch (error) {
            console.error(error);
        }
    },
    // post:( req )=>{
    //     try {
    //         console.log(req.files)
    //         // let { link } = req.files
    //         // let filePath = path.join(process.cwd(),'src','uploads',link.name)
    //         // link.mv(filePath)
    //         // req.body.img = filePath
    //         // let {title, body,img, sub_category_id} = req.body
    //         // return fetch(false,`insert into  contents (title, body, img, sub_category_id) values ($1,$2,$3,$4) returning *`,title, body, img, sub_category_id) 
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },


    put:( { content_id, title, body, img_link, sub_category_id } )=>{
        try {
            return fetch(false,`update sub_categories set title = $2, body = $3, img_link = $4, sub_category_id = $2 where content_id = $1 returning *`, content_id, title, body, img_link, sub_category_id ) 
        } catch (error) {
            console.error(error);
        }
    },

    delete:( { content_id } )=>{
        try {
            return fetch(false,`delete from contents where content_id = $1 returning *`, contents) 
        } catch (error) {
            console.error(error);
        }
    }

}