import NavBar from "../components/NavBar"
import Table from "../components/Table"
import React, { Fragment } from "react"
import {useGlobalContext} from "../context"
import {useEffect} from "react"
import DashboardBtns from "../components/DashBoardBtns"
import Title from "../components/Title"
import Pagination from "../components/Pagination/Pagination"
import Footer from "../components/Footer/Footer"

const Dashboard = () => {
  const {
    active,
    setActive,
    getdata,
    smessages,
    fetchData,
    STUDENT_DATA
  } = useGlobalContext()

  useEffect(() => {
    if (active) {
      setActive(!active)
    }
  }, [active])

  useEffect(()=>{
        fetchData("/students")
    },[])

  return (
    <Fragment>
      <NavBar />
      <Title title="Student Data"/>
      <DashboardBtns />
      <Table getdata = {getdata} smessages = {smessages}/>
      <Pagination/>
      <Footer/>
    </Fragment>
  )
}

export default Dashboard
