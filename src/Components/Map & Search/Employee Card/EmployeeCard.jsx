import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./EmployeeCard.css"

export const EmployeeCard = ({item}) => {
    return(
    
    <Col md={3}>
        <Card className="empcard">
            <Card.Img src="./logo192.png" style={{width : "200px"}} />
            <h5>Name : {item.empname}</h5>
            <p>Age : {item.empage}</p>
            <p>Field : {item.empfield}</p>
            <p>Mobile No. : {item.empmobile}</p>
        </Card>
    </Col>
    
    )
}
