const express = require("express");
const { createStudent,
        getAllStudents,
     getStudentById,
      updateStudent,getStudent, countByCountry
    } = require("../controllers/studentController");
const auth = require("../middleware/auth")
const router = express.Router()

router.get("/students",getAllStudents);
router.post("/create-student",createStudent);
router.get("/studentbyid/:id",getStudentById)
router.get("/student/:key",getStudent)
// router.get("/countbyterritory",countByCountry)
router.patch("/update-student/:id",updateStudent)


module.exports = router