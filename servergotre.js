//MIN API - Express er en node-pakke, som gør det nemt at lave en webserver:
const express = require ("express");

//We are initializing the express framework and saving it into another constant - vi navngiver den 5000:
const server = express ();
const PORT = 5000;
//Gør at vi kan se om serveren kører på port 5000, bekræftes i ternimalen: 
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//skrevet som konstanter så man kan gemme data i det:
const user = require('./models/user')
const interest = require('./models/interest')
const image = require('./models/image')

const hardUser = require('./hardUser.js')
const hardMatch = require('./hardMatch.js');

//Prøvede at opsætte jwt op i serveren: 
const {JsonWebTokenError} = require("jsonwebtoken");


// Mine CRUD endpoints, indeholder array så jeg kan teste om den virker i postman app
//til user
server.get('/user1', (req, res) => {
  //fortæller at den skal sende data fra mit første array tilbage
  res.send(user.hardUser[0]);
})

//til match
server.delete('/match', (req,res) => {
  res.send(hardMatch[0]);
})

//til interest
server.get('./interest', (req, res) => {
  res.send(hardInterest[0]);
})