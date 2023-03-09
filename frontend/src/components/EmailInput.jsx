import {useGlobalContext} from "../context"
import React from "react"
const EmailInput = ({type,placeholder,className,values,onChange,onBlur,errors,touched})=>{

  // const {email,setEmail} = useGlobalContext()
 
  return (
    <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input 
            className={(errors.email && touched) ? "input is-danger" : "input"}
            type={type} 
            value={values}
            placeholder={placeholder}
            autoComplete="off"
            onChange ={onChange}
            onBlur = {onBlur}
            id = "email"
            
            />
          <span className="icon is-small is-left">
            <i className={`fas fa-${className}`}></i>
          </span>
          {!errors.email && touched ? <span className="icon is-small is-right has-text-success">
              <i className="fas fa-check"></i>
          </span> : ""}
        </p>
        {errors.email && touched ? <p class="help is-danger">{errors.email}</p> : ""}
      </div>
  )
}

export default EmailInput