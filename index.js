const express = require('express');
const app = express();
const { UserModel, TodoModel } = require("./db");
const {auth , JWT_SECRET} = require("./auth");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//mongoose connect to DB
mongoose.connect('connecting String');
app.use(express.json);
app.post('/signup',async (req,res) => {
    const email = req.body.email; 
    const name = req.body.username; 
    const password= req.body.password; 
    const hashedPassword = await bcrypt(password,5)
    //we can user try catch while creating user 
    await UserModel.create({
        email:email,
        username:username,
        password:hashedPassword
    });
    res.json({
        message: "User created you are signed in"
    });
});

app.post('/signin',async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const response = await UserModel.findOne({
        email:email
    });
    if(response){
        //send JWT token 
        const token = jwt.sign({
                id:response._id.toString()//this id is in the form of OBJECT ID so we obviousoly need to convert it into Strign an store it in the web
            },JWT_SECRET);
            res.json({
                token
            })
    }
    else{
        res.status(403).json({
            message:"Incorrect Creds"
        });
    }
});

app.post('/todo',auth, async (req,res) => {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;


    await TodoModel.create({
        userId:userId,
        title,
        done
    });

    res.json({
        message:"todo created"
    });
});


app.get('/todos',auth, async (req,res) => {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId
    });
    res.json({
        todos
    })

});


app.listen(3000);
