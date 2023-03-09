import React,{Fragment} from 'react'
import moment from "moment"
import { Link } from 'react-router-dom'

const ProfileData = ({data}) => {
  return (
    <div className="profileContainer">
                { data && data ? 
                      <Fragment key = {data._id}>
                      <div className="profile-image">
                      <figure class="image is-128x128">
                            <img class="is-rounded" src="https://cdn-icons-png.flaticon.com/512/147/147144.png"/>
                        </figure>
                        <p className="title is-4">{data.firstname} {data.lastname}</p>
                       <p className="subtit">Student ID: {data.studentId}</p>
                        <Link to ={`/updatepage/${data._id}`} className="button is-info">Edit Student</Link>
                      </div>
                      <div className="profile-content box">
                        <p className="title is-4">Student Profile</p>
                          <hr/>
                            <div class="field is-horizontal">
                              <div class="field-body">
                                <div class="field">
                                <label class="label">Firstname</label>
                                  <p class="control is-expanded has-icons-left">
                                    <input class="input" value = {data.firstname} type="text" placeholder="Name" disabled/>
                                    <span class="icon is-small is-left">
                                     <i class="fas fa-file-signature"></i>
                                    </span>
                                  </p>
                                </div>
                                <div class="field">
                                <label class="label">Middle name</label>
                                  <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" placeholder="Email" value={data.middlename} disabled/>
                                    <span class="icon is-small is-left">
                                     <i class="fas fa-file-signature"></i>
                                    </span>
                                  </p>
                                </div>
                                <div class="field">
                                <label class="label">Lastname</label>
                                  <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" placeholder="Email" value={data.lastname} disabled/>
                                    <span class="icon is-small is-left">
                                     <i class="fas fa-file-signature"></i>
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div class="field is-horizontal">
                              <div class="field-body">
                                <div class="field">
                                <label class="label">Date of Birth</label>
                                  <p class="control is-expanded has-icons-left">
                                    <input class="input" value = {moment(data.dob).format('MMMM Do YYYY')} type="text" placeholder="Name" disabled/>
                                    <span class="icon is-small is-left">
                                      <i class="fas fa-calendar"></i>
                                    </span>
                                  </p>
                                </div>
                                <div className="field">
                                <label className="label">Gender</label>
                                  <p className="control is-expanded has-icons-left">
                                    <input className="input" type="text" placeholder="Gender" value={data.sex} disabled/>
                                    <span className="icon is-small is-left">
                                      <i className={data.sex === "Female" ? "fas fa-female" : "fas fa-male"}></i>
                                    </span>
                                  </p>
                                </div>

                                <div class="field">
                                <label class="label">Mobile Number</label>
                                  <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" placeholder="Contact" value={data.phone ? data.phone : "No Phone Number"} disabled/>
                                    <span class="icon is-small is-left">
                                      <i class="fas fa-phone-alt"></i>
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div class="field is-horizontal">
                                <div class="field-body">
                                  <div class="field">
                                  <label class="label">Address</label>
                                    <div class="control is-expanded has-icons-left">
                                      <input class="input" value = {data.address} type="text" placeholder="e.g. Partnership opportunity" disabled/>
                                      <span class="icon is-small is-left">
                                      <i class="fas fa-location"></i>
                                    </span>
                                    </div>
                                  </div>
                                  <div class="field">
                                  <label class="label">Email</label>
                                    <div class="control is-expanded has-icons-left">
                                      <input class="input" value = {data.email} type="text" placeholder="e.g. Partnership opportunity" disabled/>
                                      <span class="icon is-small is-left">
                                      <i class="fas fa-at"></i>
                                    </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <hr/>
                                <div class="field is-horizontal">
                              <div class="field-body">
                                <div class="field">
                                <label class="label">Years in Hall</label>
                                  <p class="control is-expanded has-icons-left">
                                    <input class="input" value = {data.yearsinhall <= 1 ? `${data.yearsinhall} year` : `${data.yearsinhall} years`} type="text" placeholder="Name" disabled/>
                                    <span class="icon is-small is-left">
                                      <i class="fas fa-calendar"></i>
                                    </span>
                                  </p>
                                </div>
                                <div className="field">
                                <label className="label">HOR</label>
                                  <p className="control is-expanded has-icons-left">
                                    <input className="input" type="text" placeholder="Hall" value={data.hall} disabled/>
                                    <span className="icon is-small is-left">
                                      <i className="fas fa-house"></i>
                                    </span>
                                  </p>
                                </div>

                                <div class="field">
                                <label class="label">New to Hall</label>
                                  <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" value={data.newtohall} disabled/>
                                    <span class="icon is-small is-left">
                                      <i class="fas fa-house"></i>
                                    </span>
                                  </p>
                                </div>
                              </div>
                                </div>

                                <div class="field is-horizontal">
                              <div class="field-body">
                                <div class="field">
                                <label class="label">Room Number</label>
                                  <p class="control is-expanded has-icons-left">
                                    <input class="input" value ={data.roomNumber} type="text" placeholder="Name" disabled/>
                                    <span class="icon is-small is-left">
                                      <i class="fas fa-person-booth"></i>
                                    </span>
                                  </p>
                                </div>
                                <div className="field">
                                <label className="label">Year</label>
                                  <p className="control is-expanded has-icons-left">
                                    <input className="input" type="text" placeholder="Hall" value={moment(data.year).format('YYYY')} disabled/>
                                    <span className="icon is-small is-left">
                                      <i className="fas fa-house"></i>
                                    </span>
                                  </p>
                                </div>

                                <div class="field">
                                <label class="label">Status</label>
                                  <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" value={data.status} disabled/>
                                    <span class="icon is-small is-left">
                                      <i class="fas fa-house"></i>
                                    </span>
                                  </p>
                                </div>
                              </div>
                                </div>

                            <div class="field is-horizontal">
                              <div class="field-body">
                                <div class="field">
                                <label class="label">Major</label>
                                  <p class="control is-expanded has-icons-left">
                                    <input class="input" value ={data.major} type="text" placeholder="Name" disabled/>
                                    <span class="icon is-small is-left">
                                      <i class="fas fa-person-booth"></i>
                                    </span>
                                  </p>
                                </div>
                                <div className="field">
                                <label className="label">Faculty</label>
                                  <p className="control is-expanded has-icons-left">
                                    <input className="input" type="text" placeholder="Hall" value={data.faculty} disabled/>
                                    <span className="icon is-small is-left">
                                      <i className="fas fa-house"></i>
                                    </span>
                                  </p>
                                </div>

                                <div class="field">
                                <label class="label">Status</label>
                                  <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" value={data.status} disabled/>
                                    <span class="icon is-small is-left">
                                      <i class="fas fa-house"></i>
                                    </span>
                                  </p>
                                </div>

                                <div class="field">
                                <label class="label">Level</label>
                                  <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" value={data.level} disabled/>
                                    <span class="icon is-small is-left">
                                      <i class="fas fa-house"></i>
                                    </span>
                                  </p>
                                </div>
                              </div>
                                </div>

                                <div class="field is-horizontal">
                              <div class="field-body">
                                <div class="field">
                                <label class="label">Skills</label>
                                {data.skills}
                                </div>
                               
                              </div>
                                </div>
                            <hr/>
                        </div>
                      </Fragment>
                    : <p>No Data</p>}
                    
            </div>
  )
}

export default ProfileData