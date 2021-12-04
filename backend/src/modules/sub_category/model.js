import fetch from "../../lib/postgres.js"

export default{
    get: async ()=>{
        try {
            return await fetch(false,`select * from sub_categories`)  
        } catch (error) {
            console.error(error);
        }
    },

    post:( { name } )=>{
        try {
            return fetch(false,`insert into sub_categories ( name ) values ($1) returning *`, name) 
        } catch (error) {
            console.error(error);
        }
    },

    put:( { sub_category_id, name } )=>{
        try {
            return fetch(false,`update sub_categories set name = $2 where sub_category_id = $1 returning *`, sub_category_id, name) 
        } catch (error) {
            console.error(error);
        }
    },

    delete:( { sub_category_id } )=>{
        try {
            return fetch(false,`delete from sub_categories where sub_category_id = $1 returning *`, sub_category_id) 
        } catch (error) {
            console.error(error);
        }
    }

}