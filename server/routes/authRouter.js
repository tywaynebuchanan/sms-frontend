const express = require("express")
const { registerUser, loginUser, logout,getUserDetails, getAllUsers, deleteuser} = require("../controllers/authController")
const router = express.Router()

router.post("/create-user",registerUser)
router.post("/login",loginUser)
router.post("/logout",logout)
router.get("/get-user/:id",getUserDetails)
router.get("/users",getAllUsers)
router.delete("/delete-user/:id",deleteuser)


module.exports = router