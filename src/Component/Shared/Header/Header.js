import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"
import logo from "../../../images/icon.png"
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user,logOut} = useAuth()
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand  href="/home"><img width="70px" src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end">
             <Nav.Link className="nav-item" as={Link} to="/home">Home</Nav.Link>
             <Nav.Link className="nav-item" as={Link} to="/service">Service</Nav.Link>

          

            {user?.email ?
              <Button onClick={logOut} variant="info"  >LogOut</Button> :
              <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
            }
          
           
           
            
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}  </a>
          </Navbar.Text>
    </Navbar.Collapse>
         
          </Container>
        </Navbar>
        
      </>
    );
};

export default Header;