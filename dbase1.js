const {Client}=require("pg");
const client=new Client({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"GJRJ",
    database:"online_class"
})
module.exports=client;