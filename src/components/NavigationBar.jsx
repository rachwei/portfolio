import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const NavigationBar = () => {
    const navbarStyle = {
        paddingLeft: '20px',  // Adjust the left padding as needed
        paddingRight: '20px', // Adjust the right padding as needed
        justifyContent: 'space-between',
        width: "100%"
      };

    const navLinkStyle = {
        marginRight: '15px', // Adjust the right margin as needed
    };

  return (
    <Navbar bg="light" expand="lg" style={navbarStyle} className="fixed-top">
      <Navbar.Brand as={Link} to="/">
        <b>Rachael Wei</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <div>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link as={Link} to="/projects" style={navLinkStyle}>
                Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/research" style={navLinkStyle}>
                Research
            </Nav.Link>
            <Nav.Link as={Link} to="/art" style={navLinkStyle}>
                Art/Misc
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/contact" style={navLinkStyle}>
                Let's chat!
            </Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;