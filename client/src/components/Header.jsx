import React from 'react'
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { RiMapPinUserLine } from 'react-icons/ri';

const Header = () => {

    if (isMobile || isTablet) {
        return (
            <header>
                Mobile Header
            </header>
        )
    } else if (isBrowser) {
        return (
            <header>
                <Navbar bg="dark" variant="dark" expand="lg" className="browserNav">
                    <Container>
                    <Navbar.Brand href="/">Smile</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/cart"><FiShoppingCart className="pr-2" style={{fontSize : "2em"}}/>Cart</Nav.Link>
                            <Nav.Link href="/signin"><RiMapPinUserLine className="pr-2" style={{fontSize : "2em"}}/>Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container  className="optionBar">
                    <Nav className="m-auto">
                        <Nav.Link className="navlink" href="#home">Home</Nav.Link>
                        <Nav.Link href="/mens">Mens</Nav.Link>
                        <Nav.Link href="/womens">Womens</Nav.Link>
                        <Nav.Link href="/womens">Shoes</Nav.Link>
                        <Nav.Link href="/womens">Accessories</Nav.Link>
                    </Nav>
                </Container>
            </header>
        )
    }
}

export default Header
