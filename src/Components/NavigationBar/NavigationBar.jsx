import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'

export const NavigationBar = () => {
    return(
        <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/Home">Daniyal</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/Counter">Counter</Nav.Link>
      <Nav.Link href="/Employees">Employees</Nav.Link>
      <Nav.Link href="/EmiCalc">EMI CalC</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}