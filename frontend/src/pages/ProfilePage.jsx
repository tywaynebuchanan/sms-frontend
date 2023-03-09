import React, {useEffect, useState} from "react"
import {useGlobalContext} from "../context"
import NavBar from "../components/NavBar"
import { useLocation,Link} from "react-router-dom"
import { Fragment } from "react"
import useFetch from "../hooks/useFetch"
import Title from "../components/Title"
import ProfileData from "../components/ProfileData"
import Footer from "../components/Footer/Footer"

const ProfilePage = ()=>{

    const location = useLocation()
    const studentId = location.pathname.split("/")[2]
    const url = `studentbyid/${studentId}`

    const {data,loading,error,reFetch} = useFetch(url)
    console.log(data)


    return (
        <Fragment>
          <NavBar/>
            <Title title="Profile Page"/>
              <div className="container px-6 mt-4">
                  <ProfileData data = {data}/>
              </div>
              <Footer/>
        </Fragment>
       
    )
}

export default ProfilePage