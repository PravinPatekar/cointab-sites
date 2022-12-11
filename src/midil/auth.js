const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const jwt = require("jsonwebtoken");
require('dotenv').config();

//Authentication of user.

const authentication = async (req, res, next) => {
    try {
        let token = req.headers.authorization.split(" ")[1];
        // let token = req.body.token

        //Token present or not
        if (!token) {
            return res.status(400).send({ status: false, msg: "Please enter token number." })
        }
        //Verify sekret key
        let decodedToken = jwt.verify(String(token), 'awefhseuuuuuuugvfskejkbvg', { ignoreExpiration: true }, function (error, done) {
            if (error) {
                return res.status(401).send({ status: false, message: "Token is Invalid" });
            }
            return done;
        })

        if (decodedToken.exp < Date.now() / 1000) return res.status(401).send({ status: false, message: "Token is Expired, Please relogin" });
        req.Id = decodedToken.userId;
        // return res.send(req.Id)
        next();

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }

}


//Authorization of user.

const authorization = async (req, res, next) => {
    try {
        let Id = req.Id;
        let data = req.body.userId;
        if (!data) {
            return res.status(400).send({ status: false, msg: "Invalide params" })
        }
        if (mongoose.Types.ObjectId.isValid(data) == false) {
            return res.status(400).send({ status: false, message: "UserId is not valid" });
        }
        if (Id !== data) {
            return res.status(403).send({ status: false, message: `unauthorized access` });
        }
        req.user = Id
        next()

    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}



module.exports = { authentication, authorization }

