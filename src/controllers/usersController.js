const usersModel = require("../models/usersModel");
const { isValideStudent, isValideUpdate } = require("../inputDataValidation/dataValidation")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
require('dotenv').config();


const creactStudentData = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        // using destructuring of body data.
        let pdata = req.body
        let { userName, email, password, confirmPassword, userId } = pdata

        //Input data validation
        if (password !== confirmPassword) {
            return res.status(400).send({ status: false, message: "make sure password and confirm password are same" })
        }
        let msgUserData = isValideStudent(req.body)
        if (msgUserData) {
            return res.status(400).send({ status: false, message: msgUserData })
        }

        const isUnique = await usersModel.findOne({
            "email": email, "isDeleted": false
        });

        if (isUnique) {
            return res.status(400).send({ status: false, message: `${email} this email id already exists please verify and try to login` })
        }
        //password bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        let data = {
            "userName": userName, "email": email,
            "password": hashpassword, "userId": userId
        }

        await usersModel.create(data);
        return res.status(201).send({ status: true, message: "User created successfully" })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


const getStudentData = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        let userId = req.Id
        const data = await usersModel.find({ 'isDeleted': false, 'userId': userId }).select({
            "_id": 1, "userName": 1, "email": 1, "password": 1
        })


        return res.status(200).send({ status: true, message: "Get all data successfully", "data": data });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


const updateStudentData = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        // using destructuring of body data.
        let sId = req.params.id
        let data = req.body
        data.number = parseInt(data.number)
        let { userName, email, password, userId } = data

        //Input data validation
        let msgUserData = isValideUpdate(req.body)
        if (msgUserData) {
            return res.status(400).send({ status: false, message: msgUserData })
        }

        const isUnique = await usersModel.findOne({ "userId": userId, "_id": sId, "isDeleted": false });
        if (!isUnique) return res.status(404).send({ status: false, message: "Invalid student" })

        if (password) {
            //password bcrypt
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(password, salt);
            data.password = hashpassword;
        }
        await usersModel.findOneAndUpdate({ _id: isUnique._id }, data, { new: true })
        return res.status(200).send({ status: true, message: "studet profile updated" });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const deleteStudentData = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        // using destructuring of body data.
        let sId = req.params.id
        let userId = req.Id

        //Input data validation
        const isUnique = await usersModel.findOne({ "_id": sId, "isDeleted": false, "userId": userId });


        await usersModel.findOneAndUpdate({ _id: isUnique._id }, { "isDeleted": true }, { new: true })
        return res.status(200).send({ status: true, message: "studet profile is Deleted" });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = { creactStudentData, getStudentData, updateStudentData, deleteStudentData }