import * as yup from "yup"
import "yup-phone"

// const passwordRules = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("The username can not be blank"),
    password: yup.string().required("The password is required")
})

const gender = ["Male","Female"]
const schoollevel = ["Graduate","Undergrate"]
const Status = ["Returning","New to Hall"]
const NewtoHall = ["Yes", "No"]
const Countries = ["Jamaica","Trindad and Tobago","Barbados"]
const cluster = [1,2,3,4,5,6,7,8]

export const studentSchema = yup.object().shape({
    cluster: yup.number().oneOf(cluster).required("A cluster is required"),
    studentid: yup.number().positive().min(5).max(10).required("Please enter a student Id"),
    roomnumber: yup.string().min(4).max(4).required("A room number is required"),
    firstname: yup.string().min(5).max(50).required("First name of the student is required"),
    middlename: yup.string().min(5).max(50),
    lastname: yup.string().min(5).max(50).required("Last name is required"),
    dob: yup.date().default(()=> new Date()),
    sex:yup.string().required("Please enter a gender").oneOf(gender),
    address: yup.string().min(5).max(50),
    address1: yup.string().min(5).max(50),
    parish: yup.string().required("A parish is required"),
    phone: yup.string(),
    email:yup.string().email().required("A email is required"),
    yearsinhall: yup.string().min(0).max(10).required("Number of years on hall is required"),
    level:yup.string().required("Please enter a level").oneOf(schoollevel),
    major:yup.string().required("A major is required"),
    skills:yup.string().required("A skill is required for the student"),
    faculty: yup.string().required("A faculty is required"),
    year: yup.string().required("Please enter the year of the student"),
    status: yup.string().oneOf(Status).required("Please enter the status of the student"),
    newtohall: yup.string().oneOf(NewtoHall).required("Please state if the student is new to the hall"),
    territory: yup.string().oneOf(Countries).required("Please enter the territory")  
})

