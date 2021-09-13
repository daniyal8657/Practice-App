import React,{useState, useEffect} from 'react';
import {Row, Form, Col, Button} from 'react-bootstrap'
import { EmployeeCard } from '../Employee Card/EmployeeCard';
import {EmployeeReducer} from "../Reducer/EmployeeReducer";
import "./EmployeeList.css"

export const EmployeeList = () => {
    const [searchTxt, setSearchTxt] = useState("");
    const [empArr , setEmpArr] = useState(EmployeeReducer)

// Search by Submit Button
    // const handleSearch = () =>{
    // const filterArr = empArr.filter((item)=>
    //     item.empname.toLowerCase().includes(searchTxt.toLowerCase()))
    //     if(searchTxt === ""){
    //         setEmpArr(EmployeeReducer)
    //     } else {
    //         setEmpArr(filterArr)
    //     }
    // }

// Search by onChange (realTime search)

    useEffect(()=>{
        const filterArr = empArr.filter((item)=>
        item.empname.toLowerCase().includes(searchTxt.toLowerCase()))
        if(searchTxt === ""){
            setEmpArr(EmployeeReducer)
        } else {
            setEmpArr(filterArr)
        }
    },[searchTxt])
    
        
    return(
        <div className="emplist">
            {/* <h1>Employee List</h1> */}
        <Row className="searchbar">
    <Col md={9}>
        <h1 style={{color:"white"}} >Employees</h1>
    </Col>
    <Col md={3}>
        <Form.Control type="text" placeholder="search here" onChange={(e)=> setSearchTxt(e.target.value)} />
        {/* <Button onClick={()=>handleSearch()}>Search</Button> */}
    </Col>
        </Row>
        <h5><i>you searched for : {searchTxt}</i></h5>
        <Row>
            {empArr.map((item)=> <EmployeeCard item={item} />
            )}
        </Row>
        </div>
    )
}