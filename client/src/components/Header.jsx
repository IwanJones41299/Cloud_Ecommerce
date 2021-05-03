import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { RiMapPinUserLine } from 'react-icons/ri';

const Header = () => {

    if (isMobile || isTablet) {
        return (
            <header>
                <Navbar bg="dark" variant="dark" className="browserNav">
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand>Whole Coffee</Navbar.Brand>
                        </LinkContainer>
                        <Nav className="ml-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link><FiShoppingCart className="pr-2" style={{ fontSize: "2em" }} />Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signin">
                                <Nav.Link><RiMapPinUserLine className="pr-2" style={{ fontSize: "2em" }} />Sign in</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Container>
                </Navbar>
                <Container className="optionBar">
                    <Nav className="m-auto">
                        <LinkContainer to="/">
                            <Nav.Link style={{ fontSize: "0.8em", padding: ".3rem .5rem" }}>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/coffee">
                            <Nav.Link style={{ fontSize: "0.8em", padding: ".3rem .5rem" }}>Coffee</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/machines">
                            <Nav.Link style={{ fontSize: "0.8em", padding: ".3rem .5rem" }}>Machines</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/accessories">
                            <Nav.Link style={{ fontSize: "0.8em", padding: ".3rem .5rem" }}>Accessories</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </header >
        )
    } else if (isBrowser) {
        return (
            <header>
                <Navbar bg="dark" variant="dark" expand="lg" className="browserNav">
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand>Whole Coffee</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <LinkContainer to="/cart">
                                    <Nav.Link><FiShoppingCart className="pr-2" style={{ fontSize: "2em" }} />Cart</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/signin">
                                    <Nav.Link><RiMapPinUserLine className="pr-2" style={{ fontSize: "2em" }} />Sign in</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className="optionBar">
                    <Nav className="m-auto">
                        <LinkContainer to="/">
                            <Nav.Link style={{ fontSize: "0.8em" }}>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/coffee">
                            <Nav.Link style={{ fontSize: "0.8em" }}>Coffee</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/machines">
                            <Nav.Link style={{ fontSize: "0.8em" }}>Machines</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/accessories">
                            <Nav.Link style={{ fontSize: "0.8em" }}>Accessories</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </header>
        )
    }
}

export default Header
