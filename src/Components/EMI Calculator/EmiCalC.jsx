import React,{useState,useEffect} from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import './EmiCalC.css'

export const EmiCalC = () => {
    const [p, setP] = useState()
    const [r, setR] = useState()
    const [n, setN] = useState()
    const [emi, setEmi] = useState()

useEffect(()=>{
    setEmi((p*r*n)/100)
},[p, r, n, emi])

    return(
        <div className="calcdiv">
        <Row>
        <Col md={3}></Col>
        <Col md={6}>
            <Card className="calccard">
                <Form.Control className="inputbar" type="number" placeholder="Principle" onChange={(e)=> setP(e.target.value)} />
                <Form.Control className="inputbar" type="number" placeholder="Rate of Interest" onChange={(e)=> setR(e.target.value)} />
                <Form.Control className="inputbar" type="number" placeholder="No. of Years" onChange={(e)=> setN(e.target.value)} />
                {/* <Button onClick={()=>handleCalc()}>Calculate</Button> */}
                <h5>EMI to be Paid per month : </h5><h1>{emi}</h1>
            </Card>
        </Col>
        <Col md={3}></Col>
        </Row>
        </div>
    )
}