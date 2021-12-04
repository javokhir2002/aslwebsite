

export default {
    
    get_admins:`select * from admins`,

    get_categories:`
                        select 
                        * 
                        from categories
                        where category_id = $1  
                    `,

    post_categories:`insert into categories (category_name) values ($1)`,

    put_categories:`
                        with old_data as (
                            select
                                category_id,
                                category_name,
                            from categories
                            where category_id = $1
                        ) update categories c set
                            category_name = (
                            case
                                when length($2) > 1 THEN $2
                                else o.category_name
                            end
                            )
                        from old_data o
                        where c.category_id = $1
                        returning c.*
                    `,
    delete_categories:''
}