const {Client}=require("pg");
const client=new Client({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"GJRJ",
    database:"online_class"
})
client.connect();
client.query('select * from students',(err,result)=>{
    if(!err){
        console.log(result.rows);
    }
    client.end();
}
)