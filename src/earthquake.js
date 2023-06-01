import React, {useState}from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Container,Row,Col,Navbar, Nav,NavDropdown} from 'react-bootstrap';


const EarthquakePage=()=>{

    let Page = "Earthquake"
    const [area, setArea] = useState("竹科");

    const handleDropdownSelect = (item) => {
        if(item==="north"){
            setArea("竹科");
        }
        else if(item==="center"){
            setArea("中科");
        }
        else{
            setArea("南科");
        }
    }
    

    return (
        <>
            <header>
            <Navbar bg="dark" variant='dark' expand="lg" style={{ height: '150px'}}>
                <Container sm={4} >
                    <Navbar.Brand  href="/">Meteorological center</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="area" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={ () =>handleDropdownSelect('north')}>
                            竹科
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => handleDropdownSelect('center')}>
                            中科
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => handleDropdownSelect('south')}>
                            南科
                        </NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown title="Information" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/earthquake">
                            earthquake
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/electronic">
                            electronic
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/water">
                            water
                        </NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>

                <Container sm={4} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Navbar.Brand style={{ fontSize: '40px' }}>
                        {Page}({area})
                    </Navbar.Brand>
                </Container>

                <Container sm={4} >

                </Container>
            </Navbar>
            </header>
            <main>
                <Container>
                    <Row >
                        <Col sm={8}>sm=8</Col>
                        <Col sm={4}>sm=4</Col>
                    </Row>
                    <Row>
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                    </Row>
                </Container>
            </main>
        </>
      );
}

export default EarthquakePage;