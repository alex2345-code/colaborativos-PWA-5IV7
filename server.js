const express = require('express');
const app = express();
const multer = require('multer');
const mimeTypes = require('mime-types');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req,file,cb){
        cb("",file.originalname);
    }
})

const upload = multer({
    storage: storage
})

app.get("/",(req,res)=>{
 res.sendFile(__dirname + "/views/index.html");
})

app.post("/files",upload.single('avatar') ,(req, res)=>{
    res.send("Enviado correctamente");

})

app.listen(8080,()=> console.log("Server started"));