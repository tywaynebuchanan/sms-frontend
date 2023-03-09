import React, { Fragment } from 'react'

const Title = ({title}) => {
  return (
    <Fragment>
         <div className="container px-6 pt-2">
             <p className="title">{title}</p>
             <hr/>
        </div>
    </Fragment>
   
  )
}

export default Title