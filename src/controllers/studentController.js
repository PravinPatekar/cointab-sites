const studentModel = require("../models/studentModel");
const { isValideStudent, isValideUpdate} = require("../inputDataValidation/dataValidation")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
require('dotenv').config();


const creactStudentData = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        // using destructuring of body data.
        let pdata = req.body
        pdata.number = parseInt(pdata.number)
        let { fname, lname, subjects, userId, number } = pdata

        //Input data validation
        let msgUserData = isValideStudent(req.body)
        if (msgUserData) {
            return res.status(400).send({ status: false, message: msgUserData })
        }

        const isUnique = await studentModel.findOne({
            "fname": fname, "lname": lname, "isDeleted": false,
            "subjects": subjects, "userId": userId
        });
        
        let data = {
            "fname": fname, "lname": lname, "number": isUnique ? number + isUnique.number : number,
            "subjects": subjects, "userId": userId
        }

        if (isUnique) {
            await studentModel.findOneAndUpdate({ _id: isUnique._id }, data, { new: true })
            return res.status(200).send({ status: true, message: "studet profile updated"});
        }
        
        await studentModel.create(data);
        return res.status(201).send({ status: true, message: "User created successfully"})

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


const getStudentData = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        let userId = req.Id
        const data = await studentModel.find({'isDeleted':false, 'userId':userId}).select({
            "_id":1, "fname":1, "lname":1, "subjects": 1, "number": 1
        })


        return res.status(200).send({ status: true, message: "Get all data successfully", "data":data });

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
        let { fname, lname, subjects, userId, number } = data
        
        //Input data validation
        let msgUserData = isValideUpdate(req.body)
        if (msgUserData) {
            return res.status(400).send({ status: false, message: msgUserData })
        }

        const isUnique = await studentModel.findOne({"userId": userId, "_id": sId, "isDeleted": false});
        if(!isUnique) return res.status(404).send({status: false, message: "Invalid student"})

        let r = await studentModel.findOneAndUpdate({ _id: isUnique._id }, data, { new: true })
        return res.status(200).send({ status: true, message: "studet profile updated" , "data": r});

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
        const isUnique = await studentModel.findOne({"_id": sId, "isDeleted": false,"userId": userId});


        await studentModel.findOneAndUpdate({ _id: isUnique._id }, { "isDeleted": true }, { new: true })
        return res.status(200).send({ status: true, message: "studet profile is Deleted" });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = { creactStudentData, getStudentData, updateStudentData, deleteStudentData }