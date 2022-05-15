const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const mongoose = require('mongoose');
const res = require('express/lib/response');
mongoose.connect('mongodb+srv://praveenaThota97:Appuveena@cluster0.rrsjz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{dbName:'restaurant-Name',
useNewUrlParser: true,
useUnifiedTopology: true
},err=>err?console.log("error"):console.log("connected!"));

const foodSchema = mongoose.Schema({
    dishType:{
        type:String,
        required:true
    },
    dishName:{
        type:String,
        required:true
    },
    dishPrice:{
        type:String,
        required:true
    }
})
const drinkSchema = mongoose.Schema({
    drinkType:{
        type:String,
        required:true
    },
    drinkName:{
        type:String,
        required:true
    },
    drinkPrice:{
        type:String,
        required:true
    }
})
const connection = mongoose.connection;
const foodModel= connection.model('food',foodSchema,'foodCollection');
const drinkModel= connection.model('drink',drinkSchema,'drinkCollection');

app.get('/',function(req,res){
    let tempData = [];
    foodModel.find({}, function(err, foodData){
        console.log(foodData);
        tempData.push(foodData);
        res.json(tempData);
    });
})
app.get('/drink',function(req,res){
    let tempDrinkData = [];

    drinkModel.find({},function(err,drinkData){
        console.log(drinkData);
        tempDrinkData.push(drinkData);
        res.json(tempDrinkData);
    })
})

app.listen(5000);