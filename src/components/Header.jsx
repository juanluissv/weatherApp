import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import myheader from './Header.modules.css'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';


const Header = ({ onSearch }) => {

    return (
        <header>
            <Navbar bg="" variant="dark" expand="lg" collapseOnSelect className={myheader["nav1"]}>
                <Container>
                        <Navbar.Brand> 
                            <Link to='/'>
                                <h3 className="weathertitle">WEATHER APP</h3>
                            </Link>
                        </Navbar.Brand>                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto headtext">
                             <SearchBar
                                onSearch={ onSearch }
                                />
                                <Link to='/about' className="about2">
                                    <span className="about">About</span>
                                </Link>                         
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;