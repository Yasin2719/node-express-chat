require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sMessage = require('./models/exemple');
// export one function that gets called once as the server is being initialized
module.exports = function (app, server) {

    const mongoose = require('mongoose');
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      { useNewUrlParser: true,
        useUnifiedTopology: true })
      .then(() => console.log('DB is OK'))
      .catch(() => console.log('DB failed'));

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', '*');
        next();
    });

    app.use(express.json());

    const io = require('socket.io')(server, {
        cors: {
            origin: "http://127.0.0.1:5500",
            methods: ["GET", "POST"]
        }
    })

    require('./socket/chat')(io);

    app.use(function (req, res, next) { req.io = io; next(); });

    app.get('/test', (req, res, next) => {
        res.status(200).json({ hello: 'world' })
    })
    app.get('/numberMsg', (req,res,next) =>{
        sMessage.count( function(err, count){
        console.log("nombre de msg: ", count);
        let msg = "nombre de message est"
        res.json(count); 
      });
    })
    app.get('/listMsg', (req,res,next) =>{
        sMessage.find()
        .then(chat => res.status(200).json(chat))
        .catch(error => res.status(400).json({ error }));
    })        
    app.get("/messByOneUser", (req, res)=>{       
        sMessage.aggregate([
        {       
                $group : {       
                _id: "$userId",        
                count: {$sum: 1}      
                }       
        }], function(err, result) {      
        if (err) {       
        res.send(err);       
        } else {        
        res.json(result);       
        }})
        
        })
    
}