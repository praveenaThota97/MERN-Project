/******With Expresss ****** */
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
//**API code***/
let foodData = [
    {
        dishType: 'Veg',
		dishName: 'paneer tikka',
		dishPrice: '200rs'
    },
    {
        dishType: 'Non-Veg',
		dishName: 'Chicken tikka',
		dishPrice: '250rs'
    },
    {
        dishType: 'Egg',
		dishName: 'Egg Burji',
		dishPrice: '100rs'
    }
];
let drinkData = [
    {
        drinkType: 'mocktail',
		drinkName: 'mohito',
		drinkPrice: '150rs'
    },
    {
        drinkType: 'cocktail',
		drinkName: 'Vodka',
		drinkPrice: '150rs'
    }

];

let data =[foodData, drinkData];

app.get('/data', (req,res)=>{
    res.json(data);
});

app.listen(5000,()=>{console.log("server started at 5000");})

/****Basic example*** */
// app.get('/login',(req,res)=>{
//     res.send('Login PAge-APPU');
// });
// app.get('/home',(req,res)=>{
//     res.send("home PAge-APPU");
// });
// app.get('/',(req,res)=>{
//     res.send("Invalid URL");
// });
// app.listen(5000,()=>{console.log("server started at 5000");})

/******Without Expresss ****** */
//const http = require('http');
// const func =function (req,res){
//     //console.log("fucntion called");
//     if(req.url == '/login' && req.method == 'GET'){
//         res.writeHead(200,{'content-type':'text/plain'});
//         res.write('Login-APPU');
//         res.end();
//     }else if(req.url == '/home' && req.method == 'GET'){
//         res.writeHead(200,{'content-type':'text/plain'});
//         res.write('home-APPU');
//         res.end();
//     }else{
//         res.writeHead(404,{'content-type':'text/plain'});
//         res.write('Invalid url');
//         res.end();
//     }
    
// }
// http.createServer(func).listen(5000,function(){
//     console.log("server started at 5000");
// });