const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://praveenaThota97:Appuveena@cluster0.rrsjz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{dbName:'restaurant-Name',
useNewUrlParser: true,
useUnifiedTopology: true
},err=>err?console.log("error"):console.log("connected!"));

app.listen(5000);