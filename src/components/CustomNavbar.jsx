import React,{useState} from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import  { Link }  from 'react-router-dom';
import "./CustomNavbar.css";

const CustomNavbar = (props) => {

    const [value, setValue] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.setCityName(value);
    }

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Mausam</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Form inline onSubmit={handleSubmit}>
              <FormControl type="text" placeholder="Search for any city" className="mr-sm-2" onChange={handleChange}/>
            </Form>
          <Nav className="mr-sm-2 ml-auto">
            <Nav.Link><Link to="/current">Current</Link></Nav.Link>
            <Nav.Link><Link to="/daily">Daily</Link></Nav.Link>
            <Nav.Link><Link to="/hourly">Hourly</Link></Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}

export default CustomNavbar;


