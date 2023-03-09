import React from 'react'
import './App.css'
import Login from "./pages/LoginPage/LoginPage"
import Dashboard from "./pages/Dashboard"
import Admin from "./pages/Admin"
import ProfilePage from "./pages/ProfilePage"
import {Routes,Route} from "react-router-dom"
import AddStudent from './pages/AddStudent'
import UpdatePage from './pages/UpdatePage'
import { RequireAuth } from 'react-auth-kit'

export default function App() {
 
  return (

    <Routes>
      <Route exact path="/" element = {<Login />}/>
      <Route exact path="/dashboard" element= {<RequireAuth loginPath = "/">
        <Dashboard />
      </RequireAuth>}/>
      <Route exact path="/addstudent" element= {<RequireAuth loginPath = "/">
        <AddStudent />
      </RequireAuth>}/>

      <Route exact path="/profilepage/:id" element= {<RequireAuth loginPath = "/">
        <ProfilePage />
      </RequireAuth>}/>

      <Route exact path="/updatepage/:id" element= {<RequireAuth loginPath = "/">
        <UpdatePage />
      </RequireAuth>}/>
    </Routes>
  
   
  )
}