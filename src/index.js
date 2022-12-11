const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const cors = require("cors");
const app = express();
const connection = require("./db");
const cookieParser = require("cookie-parser");


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



// database connection
connection();


app.use('/', router);

//herokue

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
    const path = require("path");
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname,'client', 'build','index.html'))
    })
}

app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});
