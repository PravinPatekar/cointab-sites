const express = require('express');
const router = express.Router();

const {creactAdmin, adminLogin} = require("../controllers/adminController")
const {creactStudentData, getStudentData, updateStudentData, deleteStudentData } = require("../controllers/studentController")
const { authentication, authorization } =require("../midil/auth")

//------------------------------------------> (This is test api ) <--------------------------------------------//

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})





// ===================================================( All admin api)======================================================///


//-------------------------> (When admin creat, call this api) <----------------------------------//

router.post("/signup", creactAdmin)

//-------------------------> (When admin login,  call this api) <----------------------------------//

router.post("/login", adminLogin)



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
