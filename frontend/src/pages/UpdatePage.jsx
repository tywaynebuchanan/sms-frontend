import React, {useEffect, Fragment} from "react"
import NavBar from "../components/NavBar"
import { useLocation} from "react-router-dom"
import Title from "../components/Title"

const UpdatePage = ()=>{

    const location = useLocation()
    const studentId = location.pathname.split("/")[2]
    console.log(studentId)

return (
        <Fragment>
             <NavBar/>
            <Title title="Update Page"/>
        </Fragment>
       
    )
}

export default UpdatePage