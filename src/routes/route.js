const express = require('express');
const router = express.Router();

const {createUser, userLogin} = require("../controllers/userController")
const {creactStudentData, getStudentData, updateStudentData, deleteStudentData } = require("../controllers/usersController")
const { authentication, authorization } =require("../midil/auth")

//------------------------------------------> (This is test api ) <--------------------------------------------//

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})





// ===================================================( All admin api)======================================================///


//-------------------------> (When admin creat, call this api) <----------------------------------//

router.post("/signup", createUser)

//-------------------------> (When admin login,  call this api) <----------------------------------//

router.post("/login", userLogin)



// ===================================================( All students api)======================================================///


//-------------------------> (When admin creat, call this api) <----------------------------------//

router.post("/users",authentication,authorization, creactStudentData)

//-------------------------> (When admin login,  call this api) <----------------------------------//

router.get("/users",authentication, getStudentData)


//-------------------------> (When admin creat, call this api) <----------------------------------//

router.put("/users/:id",authentication,authorization, updateStudentData)

//-------------------------> (When admin login,  call this api) <----------------------------------//

router.delete("/users/:id",authentication, deleteStudentData)





module.exports = router;
