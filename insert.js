const client=require('./dbase1');
client.connect();
client.query("INSERT INTO students VALUES(11,'Abdul Kalam',9819711932,'abdulkalam10@gmail.com','IT')", (err, result)=>{
    if(!err){
        console.log("Data inserted successfully");
    }
    client.end();
})