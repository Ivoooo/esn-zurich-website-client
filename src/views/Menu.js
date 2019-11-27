import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/events">ESN Zurich</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Events" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/createevent">Create Event</NavDropdown.Item>
                        <NavDropdown.Item href="/events">See events</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/events/1">See specific event (change in url)</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menu;
