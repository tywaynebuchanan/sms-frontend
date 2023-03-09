import React, {useEffect, useState} from "react"
import {useGlobalContext} from "../context"
import NavBar from "../components/NavBar"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link ,useNavigate} from "react-router-dom"
import Title from "../components/Title"
import FirstStep from "../components/forms/FirstStep"
import Footer from "../components/Footer/Footer"
import {useFormik} from "formik"
import { studentSchema } from "../components/schemas"
import { api } from "../api/api"


const AddStudent = () => {
  const {
    active,
    setActive,
    setError,
    setMessages,
    smessages,
    studentId,
    firstname,
    lastname,
    middlename,
    dob,
    address,
    setFirstName,
    setLastName,
    setAddress,
    setMiddleName,
    onChange,
    setStudentId,
    handleStudent,
    phone,
    setPhone,
    roomNumber,
    setRoomNumber,toast,toastData
  } = useGlobalContext()

  const navigate = useNavigate();
  const onSubmit = async(values)=>{
    const {firstname,lastname} = values
    try {
        const addstudent = await api.post("/create-student",{firstname,lastname})
        if(addstudent.data.status.success = "success"){
        navigate("/dashboard")
        toast.success("The student was added to the database!")
      }else{
        toast.error("Unable to add student",toastData)
      } 
    } catch (error) {
      console.log(error.response.data.message)
    }
      
  }

   const {values,handleBlur,touched,actions,errors,handleChange,handleReset,handleSubmit} = useFormik({
    initialValues:{
    
    cluster: '',
    studentid: '',
    roomnumber: '',
    firstname:'',
    middlename:'',
    lastname:'', 
    dob: '',
    sex:'',
    address:'', 
    address1:'', 
    parish:'' ,
    phone: '',
    email:'',
    yearsinhall: '',
    level:'',
    major:'',
    faculty: '',
    year: '',
    status: '',
    newtohall: '',
    territory: '',
    skills: ''

    },
    validationSchema: studentSchema,
    onSubmit,
    })
  return (
    <>
      <NavBar />
     <Title title="Add Student"/>
      <FirstStep 
      values={values} 
      handleBlur={handleBlur}
      touched ={touched}
      actions ={actions}
      errors = {errors}
      handleChange = {handleChange}
      handleReset = {handleReset}
      handleSubmit = {handleSubmit}
      />
     <Footer/>
    </>
  )
}

export default AddStudent
