require('dotenv').config();

//estas variables estan protegidas en un .env

const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const db = process.env.DATABASE;
const host = process.env.DB_HOST;

console.log("Ejecutando el node")
const {Client} = require("pg")

const obtenerEmpleados = async () => {

    const client = new Client({
        user: user,
        host: host,
        database: db,
        password: " ",
        port: port,
    });
    await client.connect()

    const res = await client.query("SELECT * from empleados")
    const result = res.rows

    await client.end()
    return result;

}
obtenerEmpleados().then((result) =>{
    console.log(result);
});