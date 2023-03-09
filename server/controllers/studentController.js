const Student = require("../modules/studentModel")
const catchAsync = require("../middleware/catchAsync")
const AppError = require("../utils/errorHandler")

exports.getAllStudents = catchAsync(async (req,res,next)=>{
   
        const student = await Student.find()
        if(!student) return next(new AppError("Unable to get all the students",400))
        res.status(200).json({
            status: "success",
            student
        })
   
})
//Create Student
exports.createStudent = catchAsync(async (req,res,next)=>{
   
    //Capturing the user Id when you create a student
    // req.body.user = req.user.id
        const createStudent = await Student.create(req.body)
        if(!createStudent) return next(new AppError("Unable to create the student",400))
        res.status(200).json({
            status: "success",
            data: {
                createStudent
            }
        })
    
})

exports.getStudent = catchAsync(async(req,res,next)=>{

        const student = await Student.find({
            "$or":[
                {firstname:{$regex:req.params.key}},
                {lastname:{$regex:req.params.key}},
                {studentId:{$regex:req.params.key}},
                {phone:{$regex:req.params.key}},
               
            ]
            })
        if(!student || student === null) return next(new AppError("Unable to find student by first name"))

        res.status(200).json({
            status: "success",
            student
        })
   
})

exports.getStudentById = catchAsync(async(req,res,next)=>{

    const student = await Student.findById(req.params.id)
    if(!student || student === null) return next(new AppError("Unable to find student by first name"))

    res.status(200).json({
        status: "success",
        student
    })

})

exports.updateStudent = catchAsync(async(req,res,next)=>{
    const updatestudent = await Student.findByIdAndUpdate(req.params.id,req.body,
        {
            new: true,
            runValidators: true,
    });

    if(!updatestudent){
       return next(new AppError(`Unable to update the student by this id: ${req.params.id}`));
    }

    res.status(200).json({
        status: "success",
        data:{
            updatestudent
        }
    })
})

