import React,{useState} from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const DashboardBtns = ()=>{
    const options = [
        {
            id: 1,
            option: "Cluster",
        },
        
        {
            id: 2,
            option: "Last Name",
        },
        {
            id: 3,
            option: "Jamaica",
        },
        {
            id: 4,
            option: "Graduate",
        },

    ]
    const {active,setActive,search,setSearch,ResetData} = useGlobalContext()
   
   
    return (
        <div className="container px-6 pt-6">
            <div className="dashcontainer">
            <form>
                <div className="field has-addons">
                <div className="control is-expanded">
                   <input 
                   className="input" 
                   type="text" 
                   placeholder="Find a student"
                   value={search}
                   onChange = {e=>setSearch(e.target.value)}
                   onBlur = {ResetData}
                   />
               </div>
               <div className="control">
                   <button className="button is-info" onClick={ResetData}>
                   Reset Search
                   </button>
               </div>      
            </div>
            </form> 

                    <div className="field is-grouped is-grouped-right">
                        <p className="control">
                            <Link to = "/addstudent" className="button is-info"
                            onClick={()=>setActive(!active)}>
                            Add Student
                            </Link>
                        </p>
                        <div className="field">
                            <p className="control has-icons-left">
                            <span className="select">
                             <select>
                                {options.map(option=>(
                                    <option key={option.id} value={option.id}>{option.option}</option>
                                ))}
                            </select>
                        </span>
                        <span className="icon is-small is-left">
                      <i className="fas fa-filter"></i>
                        </span>
                        </p>
                    </div>
                    </div>
                </div>
            
            </div>
        
    )
}

export default DashboardBtns