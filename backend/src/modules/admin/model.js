import fetch from '../../lib/postgres.js'
import md5 from 'md5';

export default {
    post: async ({name, password}) => {
        try {
            return await fetch(false, `insert into admins (name, password) values ($1, $2) returning *`, name, md5(password))
        } catch (error) {
            console.error(error);
        }
    },
    delete: async ({admin_id}) => {
        try {
            return await fetch(false, `delete from admins where admin_id = $1 returning *`, admin_id, )
        } catch (error) {
            console.error(error);
        }
    },
    get: async () => {
        try {
            let geted = 'admin'
            return await fetch(false, `select * from admin where status = $1`, geted)
        } catch (error) {
            console.error(error);
        }
    },
    put: async ({admin_id,name,password}) => {
        try {
            return await fetch(false, `update admins set name = $2, password = $3 where admin_id = $1 returning *`, admin_id, name, md5(password))
        } catch (error) {
            console.error(error);
        }
    },
    login: async ({name,password}) => {
       try {
            return await fetch(false, `select * from admins where name = $1 and password = $2`,name, md5(password))
        } catch (error) {
            console.error(error);
        }
    }
}




