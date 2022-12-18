const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const cors = require("cors");
const app = express();
const connection = require("./db");
const cookieParser = require("cookie-parser");
require('dotenv').config()


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



// database connection
connection();


app.use('/', router);

//vercel 

if (process.env.NODE_ENV == 'production') {
    const path = require('path')
    app.use(express.static(path.join(__dirname, "../client/build")));

    app.get("*", function (_, res) {
        res.sendFile(
            path.join(__dirname, "../client/build/index.html"),
            function (err) {
                if (err) {
                    res.status(500).send(err)
                }
            }
        )
    })
}



app.listen(process.env.PORT || 8080, function () {
    console.log('Express app running on port ' + (process.env.PORT || 8080))
});
