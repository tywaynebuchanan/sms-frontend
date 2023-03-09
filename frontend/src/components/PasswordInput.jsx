import React,{useState} from "react"
const PasswordInput = ({placeholder,className,onChange,values,errors,touched})=>{

  const [eye,setEye] = useState(false)

  return (
    <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input 
              className={errors.password && touched ? "input is-danger" : "input"}
            type={eye ? "text" : "password"}
            value={values}
            placeholder={placeholder}
            onChange={onChange}
            id = "password"
            />
          <span className="icon is-small is-left">
            <i className={`fas fa-${className}`}></i>
          </span>
          <span class="icon is-small is-right"  onClick={()=>setEye(!eye)}>
             <i className={eye ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </span>
        </p>
        {errors.password && touched ? <p class="help is-danger">{errors.password}</p> : ""}
      </div>
  )
}

export default PasswordInput