const mongo = require("mongoose");

const DB = process.env.DATABASE;

mongo.connect(DB).then(()=> {
    console.log("connected to MongoDB !!");
}).catch((err)=>{
    console.log("errors", err);
})


// mongo.connect("mongodb://localhost:27017/simpleDb", {
//     useNewUrlParser:true, useUnifiedTopology:true
// }
// , (err)=> {
//     if(err){
//         console.log("shows errors" , err)

//     }
//     else{
//         console.log("connected!!!!")
//     }
// })