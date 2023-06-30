import React from 'react'
import "./style.css"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  return (
    <Navbar id='navbar' expand="lg" fixed='top'>
    <Container className='align-items-center justify-content-between d-flex'>
      <Link to="/" className='logo'>
        <img src="Assets/images/logo.png" alt="logo" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav"> <i className='toggle-icon'> <MenuIcon/> </i> </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav-links">
          <NavLink to="/home" className="nav-link">Home</NavLink>
          <NavDropdown title="pages" className="nav-link" id="basic-nav-dropdown">
              <Link to="/about" className='dropdown-item'>about</Link>
              <Link to="/team" className='dropdown-item'>our team</Link>
              <Link to="/faq" className='dropdown-item'>FAQ's</Link>
              <Link to="/booking" className='dropdown-item'>booking</Link>
              <Link to="/error" className='dropdown-item'>error 404</Link>
              <Link to="/login" className='dropdown-item'>login/register</Link>
          </NavDropdown>
          <NavDropdown title="services" className="nav-link" id="basic-nav-dropdown">
              <Link to="/services" className='dropdown-item'>services</Link>
              <Link to="/" className='dropdown-item'>service details</Link>
          </NavDropdown>
          <NavDropdown title="blog" className="nav-link" id="basic-nav-dropdown">
              <Link to="/blogs" className='dropdown-item'>blogs</Link>
              <Link to="/" className='dropdown-item'>blog details</Link>
          </NavDropdown>
          <NavLink to="/followus" className="nav-link">follow us</NavLink>
          <NavLink to="/search" className="nav-link">
            <i> <SearchIcon/> </i>
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            <button className='btn primary-btn'>contact us <i> <KeyboardArrowRightIcon/> </i> </button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header