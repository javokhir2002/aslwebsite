import fetch from "../../lib/postgres.js"

export default{
    get: async ()=>{
        try {
            return await fetch(false,`select * from categories`)  
        } catch (error) {
            console.error(error);
        }
    },

    post:( { name } )=>{
        console.log(name)
        try {
            return fetch(false,`insert into categories ( name ) values ($1) returning *`, name) 
        } catch (error) {
            console.error(error);
        }
    },

    put:( { category_id, name } )=>{
        try {
            return fetch(false,`update categories set name = $2 where category_id = $1 returning *`, category_id, name) 
        } catch (error) {
            console.error(error);
        }
    },

    delete:( { category_id } )=>{
        try {
            return fetch(false,`delete from categories where category_id = $1 returning *`, category_id) 
        } catch (error) {
            console.error(error);
        }
    }

}