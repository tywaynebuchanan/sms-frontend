const mongoose = require("mongoose")

var StudentSchema = new mongoose.Schema({
 
    studentId:{
        type: String,
    },
    roomNumber: {
        type: String
    },
    cluster:{
        type: Number,
        min:0,
        max: 9
    },
    
    firstname: {
        type: String,
    },

    middlename: {
        type: String,

    },

    lastname: {
        type: String,
    },
    dob: {
        type: Date,
    },
    sex:{
        type:String, 
    },
    address: {
        type: String,
    },
    address1:{
        type: String,
    },
    parish: {
        type: String,
    },
    phone:{
        type: String,
    },
    email:{
        type: String,
        min: 10,
        max: 255,
    },
    yearsinhall:{
        type: Number,
        min: 0,
        max: 5,
        default: 0

    },
    level: {
        type: String,
        default: "Undergrad"
    },
    major:{
        type: String,
        default: "Undeclared"

    },
    faculty: {
        type: String
    },
    hall: {
        type: String,
        default: "Rex Netherford"
    },
    year:{
        type: Date
    },
    status:{
        type: String,
        default: "Returning"
    },
    newtohall: {
        type: String, 
        default: "No"
    },
    skills:[String],

    territory:{
        type: String,
        default: "Jamaica"
    },

    profilepicture: {
        type: String
    }


}, {timestamps: true});

const Student = mongoose.model('students', StudentSchema);

module.exports = Student