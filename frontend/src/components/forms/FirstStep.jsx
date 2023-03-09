import React from 'react'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'


const FirstStep = ({values,handleBlur,touched,actions,errors,handleChange,handleReset,handleSubmit}) => {
    const {
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
        setRoomNumber,
        address2,
        parish
      } = useGlobalContext()

      const clusters = [
        {
          id: 1,
          clustername: "Marcus Garvey"
        },
          {
          id: 2,
          clustername: "Sam Sharpe"
        },
        ]

         const parishes= [
        {
          id: 1,
          parishname: "Kingston"
        },
          {
          id: 2,
          parishname: "St Andrew"
        },
        ]
  return (
    <section className="section">
        <div className="container">
          <div className="addStudentContainer box pt-6">
            <form className="form" onSubmit={handleStudent}>
            
            <div className="field">
                <label className="label">Student Id</label>
                <div className="control">
                  <input
                    className="input"
                    value={values.studentId}
                    onChange={e => setStudentId(e.target.value)}
                    type="text"
                    placeholder="e.g 111-111-1111"
                    id = "studentid"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Room Number</label>
                <div className="control">
                  <input
                    className="input"
                    value={values.roomnumber}
                    onChange={e => setRoomNumber(e.target.value)}
                    type="text"
                    placeholder="e.g 111-111-1111"
                    id = "roomNumber"
                  />
                </div>
              </div>

             <div class="field">
              <label class="label">Cluster</label>
              <div class="control">
                <div class="select">
                  <select name = "cluster">
                  {clusters.map(cluster=>(
                    <option key = {cluster.id} value = {cluster.id}>[{cluster.id}] - {cluster.clustername}</option>
                  ))}
                  </select>
                </div>
              </div>
            </div>

              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input
                    className="input"
                    value={firstname}
                    onChange={e => setFirstName(e.target.value)}
                    type="text"
                    placeholder="e.g Alex"
                    id = "firstname"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Middle Name</label>
                <div className="control">
                  <input
                    className="input"
                    value={middlename}
                    onChange={e => setMiddleName(e.target.value)}
                    type="text"
                    placeholder="e.g. John"
                    id = "middlename"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    className="input"
                    value={lastname}
                    onChange={e => setLastName(e.target.value)}
                    type="text"
                    placeholder="e.g. Brown"
                    id = "lastname"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Date of Birth</label>
                <div className="control">
                  <input
                    className="input"
                    value={dob}
                   onChange = {e => onChange(e.target.value)}
                    type="date"
                    id = "date"
                  />
                </div>
              </div>

              <div class="field">
              <label class="label">Gender</label>
              <div class="control">
                <div class="select">
                  <select name = "sex">
                  <option value = "Male">Male</option>
                  <option value = "Female">Female</option>
                  </select>
                </div>
              </div>
            </div>

              <div className="field">
                <label className="label">Address</label>
                <div className="control">
                  <input
                    className="input"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    type="text"
                    placeholder="Street"
                    id = "address"
                  />
                </div>
              </div>

               <div className="field">
                <label className="label">Address 2</label>
                <div className="control">
                  <input
                    className="input"
                    value={address2}
                    onChange={e => setAddress(e.target.value)}
                    type="text"
                    placeholder="Street"
                    id = "address"
                  />
                </div>
              </div>

              <div class="field">
              <label class="label">Parish</label>
              <div class="control">
                <div class="select">
                  <select name = "parish">
                  {parishes.map(parish=>(
                    <option key = {parish.id} value = {parish.id}>{parish.parishname}</option>
                  ))}
                  </select>
                </div>
              </div>
            </div>
              
              <div className="field">
                   <label className="label">Phone</label>
                    <PhoneInput 
                      placeholder = "Enter your phone number"
                      value = {phone}
                      onChange = {setPhone}
                      classNameName = "phone block"
                      max = {10}
                      defaultCountry = "JM"
                      onlyCountries={['jm']}
                      areaCodes={{jm: ['876']}}
                      id = "country "
                    />
              </div>
             
            
             <div className="field is-grouped">
                <p className="control">
                  <a className="button is-info">
                    Submit
                  </a>
                </p>
                <p className="control">
                  <Link to="/secondstep" className="button is-warning">
                    Cancel
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

export default FirstStep