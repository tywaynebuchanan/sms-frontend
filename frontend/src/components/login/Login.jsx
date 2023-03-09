import { useGlobalContext } from "../../context"
import EmailInput from "../EmailInput"
import PasswordInput from "../PasswordInput"
import Button from "../Button"
import {useNavigate} from "react-router-dom"
import React, { Fragment } from "react"
import {useFormik} from "formik"
import { loginSchema } from "../schemas"
import {api} from './api'
import {toast} from "react-toastify"
import "./login.css"

const Login = ()=>{
 
const nagivate = useNavigate()
const {signIn,toastData} = useGlobalContext()

 const onSubmit = async (values) => {
  const {email,password} = values
 try {
    const res = await api.post("/login",{email,password})
    const username = res.data.user._id
   if(signIn({
      token: res.data.token,
      expiresIn: 100,
      authState: {username},
      authType: 'Bearer'
      })){
       if(res.data.success){
        toast.success(res.data.message,toastData)
            nagivate("/dashboard")
          }
        }
 } catch (error){
    toast.error(error.response.data.message,toastData)
    console.log(error.response.data.message)
 }
 
  
  }

 const {values,handleBlur,touched,actions,errors,handleChange,handleReset,handleSubmit} = useFormik({
    initialValues:{
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit,
    })

  return (
    <Fragment>
      <main className="bg-img">
        <div className="container">
            <div className="loginContainer box pb-6">
                <p className = "title has-text-centered pt-2">Login - HMS</p>
                <form 
                className="form" 
                onSubmit={handleSubmit}
                >

                  <EmailInput 
                  type = "email" 
                  placeholder = "Username" 
                  className="user"
                  value ={values}
                  onChange={handleChange}
                  onBlur = {handleBlur}
                  errors = {errors}
                  touched = {touched}
                  
                  />
                  <PasswordInput 
                  placeholder = "Password" 
                  className="lock"
                  value = {values}
                  onChange = {handleChange}
                  onBlur = {handleBlur}
                   errors = {errors}
                  touched = {touched}
                  
                  />
                    <div className="field">
                      <p className="control">
                        <Button color = "info" type="submit">Login</Button>
                        </p>
                    </div>
            
                </form>
              </div>
          </div>
      </main>
    </Fragment>
    


  )
}

export default Login