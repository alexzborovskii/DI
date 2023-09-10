const knex = require("knex");

const db = knex({
    client: "pg",
    connection: {
        host: "lucky.db.elephantsql.com",
        port: 5432,
        user: "cyexcoah",
        password: "O3EzUeYJjUrakHyVfma_NZzzfM_-9H3V",
        database: "cyexcoah",
    },
});

// db.select("id", "name", "price")
//     .from("products")
//     .then((rows) => {
//         console.log(rows);
//     })
//     .catch((err) => console.log(err));
// db("products")
// .select("id")
// .select("id", "name", "price")
// .where({ id: 1 })
// .insert([
//     {
//         name: "iChair",
//         price: 9000,
//     },
// ], ['id', 'name'])
// .returning('*')
// .where({id:1})
// .update({name:'iPhone14'}, ['name'])
// .select("id", "name", "price")
// .orderBy("name")
// db.raw('select id, name, price from products where id > 4')

// db.raw('select id, name, price from products where id > ? and id < ?', [3, 6])
// .then((rows) => {
//     // console.log(rows);
//     // console.log(rows[0].name);
//     console.log(rows.rows);
// })
// .catch((err) => console.log(err));

const register = async () => {
    const trx = await db.transaction();
    try {
        const user = await db("myusers").insert({
            username: "aaa",
            email: "aaa@gmail.com",
        }, ['username', 'email'])
        .transacting(trx);
        console.log('user=> ', user);
        
        const hashpwd = await db('hashpwd')
        .insert({
            username: user[0].username,
            password: '123456'

        }, ['password', 'username'])
        .transacting(trx);

        console.log('hashpwd=> ', hashpwd);


        await trx.commit();
    } catch (error) {
        console.log(error)
        trx.rollback()
    }
};
register();
