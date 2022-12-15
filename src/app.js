const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const apiRouter = require('./routes');

app.use(bodyParser.json());

mongoose.set('strictQuery', true);

//connection MongoDB
mongoose.connect('mongodb+srv://DCheong:1234@cluster0.j2bczak.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log("Succefully connect to database")
})
.catch(err=>console.log(err));

app.use("/api/v", apiRouter);

//port et affichage de validation
app.listen("4001", function () {
    console.log("server launch");
})


/*
//function request first API {get,set}
app.get('/', function (req, res) {
    res.send({
        message: "Test OK",
        auth: false,
        myproducts:[{id:1},{id:2}]
    });
})

//post dans un body
app.post('/api/v1/auth/login', function (req,res){
    //console.log(req.body);
    if (!req.body.email ){
        return res.status(404).send({
            auth: "false",
            message: "User not found"
        })
        }
        res.send({
            auth: "true",
            message: "User logged"
        })
    })

//obj exemple
const myUser = {
    firstname: "David",
    lastname: "Cheong"
}

//console.log(myUser.lastname);
*/