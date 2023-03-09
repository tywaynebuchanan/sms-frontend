import React from "react"
const Button = ({color,type,children,className})=>{

    return (
      <button className={`button is-${color} ${className}`} type={type}>
        {children}
          </button>
    )
  }
  
  export default Button