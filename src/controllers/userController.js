const adminModel = require("../models/adminModel");
const { isValideAdmin } = require("../inputDataValidation/dataValidation")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const {secretKey} = require('../config/keys')




const createUser = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    try {
        // using destructuring of body data.
        let { email, password } = req.body

        //Input data validation
        let msgUserData = isValideAdmin(req.body)
        if (msgUserData) {
            return res.status(400).send({ status: false, message: msgUserData })
        }

        const isEmailUnique = await adminModel.findOne({ email });
        if (isEmailUnique) {
            return res.status(400).send({ status: false, message: `email: ${email} already exist` });
        }

        //password bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        //Create User data after format =>email,password
        const AdminData = {
            email: email,
            password: hashpassword
        };

        await adminModel.create(AdminData);
        return res.status(201).send({ status: true, message: "User created successfully"})


    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })
    }
}



//Admin Login


const userLogin = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    try {
        // using destructuring of body data.
        const data = req.body
        const { email, password } = data;

        //Input data validation
        let msgUserData = isValideAdmin(data)
        if (msgUserData) {
            return res.status(400).send({ status: false, message: msgUserData })
        }

        const isEmailUnique = await adminModel.findOne({ email });
        if (!isEmailUnique) {
            return res.status(400).send({ status: false, message: "invalid login credentials" });
        }

        //Input data verify
        let Password = await bcrypt.compare(password, isEmailUnique.password)
        if (!Password) {
            return res.status(400).send({ status: false, message: "invalid login credentials" });
        }

        // creating JWT
        const token = jwt.sign({ userId: isEmailUnique._id }, secretKey, { expiresIn: "1h" });

        //Format of data.
        let Data = {
            userId: isEmailUnique._id,
            token: token
        }

        res.setHeader('Authorization', 'Bearer '+ token);
        return res.status(200).send({ status: true, message: "login successfully", data: Data });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}




module.exports = {createUser, userLogin}