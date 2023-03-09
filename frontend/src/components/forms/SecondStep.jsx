import React from 'react'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'

const SecondStep = () => {
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
        setRoomNumber
      } = useGlobalContext()

  return (
    <section className="section">
        <div className="container">
        <div className="step pt-6 pb-6">
        <figure class="image is-64x64">
                <img class="is-rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Eo_circle_blue_number-1.svg/1024px-Eo_circle_blue_number-1.svg.png"/>
        </figure>
        </div>
       
          <div className="addStudentContainer box pt-6">
            <form className="form" onSubmit={handleStudent}>
            <div class="field">
                <label class="label">Student Id</label>
                <div class="control">
                  <input
                    class="input"
                    value={studentId}
                    onChange={e => setStudentId(e.target.value)}
                    type="text"
                    placeholder="e.g 111-111-1111"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Room Number</label>
                <div class="control">
                  <input
                    class="input"
                    value={roomNumber}
                    onChange={e => setRoomNumber(e.target.value)}
                    type="text"
                    placeholder="e.g 5111"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                  <input
                    class="input"
                    value={firstname}
                    onChange={e => setFirstName(e.target.value)}
                    type="text"
                    placeholder="e.g Alex"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Middle Name</label>
                <div class="control">
                  <input
                    class="input"
                    value={middlename}
                    onChange={e => setMiddleName(e.target.value)}
                    type="text"
                    placeholder="e.g. John"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                  <input
                    class="input"
                    value={lastname}
                    onChange={e => setLastName(e.target.value)}
                    type="text"
                    placeholder="e.g. Brown"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Date of Birth</label>
                <div class="control">
                  <input
                    class="input"
                    value={dob}
                   onChange = {e => onChange(e.target.value)}
                    type="date"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Address</label>
                <div class="control">
                  <input
                    class="input"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    type="text"
                    placeholder="Street"
                  />
                </div>
              </div>
              <label class="label">Phone</label>
              <PhoneInput 
                placeholder = "Enter your phone number"
                value = {phone}
                onChange = {setPhone}
                className = "phone block"
                defaultCountry = "JM"
              />
            
             <div class="field is-grouped">
                <p class="control">
                  <a class="button is-info">
                    Submit
                  </a>
                </p>
                <p class="control">
                  <Link to="/dashboard" class="button is-warning">
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

export default SecondStep