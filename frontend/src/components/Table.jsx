import {Link, useLocation} from 'react-router-dom'
import moment from "moment"
import React from "react"
import NewButtons from './NewButtons'
import {ProgressBar} from 'react-loader-spinner'

const Table = ({getdata,smessages,loading})=>{

const progressdata = {
  height:"80",
  width:"80",
  ariaLabel:"progress-bar-loading",

  wrapperClass:"progress-bar-wrapper",
  borderColor:'#3F8ED0',
  barColor:'#3F8ED0'
}
  if(getdata.length < 1 ){
    return <section className='section container'>
            <div className="notification is-white">
            <p className='subtitle'>{smessages}</p>
            </div>
          </section>
}


  return <div className="container p-6">
  { loading ?  <ProgressBar progressdata/> : <table className = "table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead className="has-text-centered">
        <tr>
          <th>Student Id</th>
          <th>Room Number</th>
          <th>First Name</th>
          <th>MiddleName</th>
          <th>Lastname</th>
          <th>Date of Birth</th>
          <th>Address</th>
          <th>Contact Number</th>
          <th colSpan={2}>Action</th>
        </tr>
          </thead>
          <tbody>
             {getdata.map(({
              _id,
              studentId,
              roomNumber,
              firstname,
              middlename,
              lastname,
              dob,
              address
              ,phone})=>(
            <tr key = {_id}>
                <td>{studentId}</td>
                <td>{roomNumber}</td>
                <td>{firstname}</td>
                <td>{middlename}</td>
                <td>{lastname}</td>
                <td>{moment(dob).format('LL')}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td><NewButtons type = {"View"} path = {"/profilepage/"} id = {_id} icon = {"eye"}/></td>
                <td><NewButtons type = {"Edit"} path = {"/updatepage/"} id = {_id} icon = {"edit"}/></td>
                {/* <td><Link to = {`/profilepage/${_id}`} className="button is-info is-small">View</Link></td>
                <td><Link to = {`/updatepage/${_id}`} className="button is-info is-small">Update</Link></td> */}
            </tr>
            ))}
          </tbody>
    </table>  }
    
</div>


    
}

export default Table