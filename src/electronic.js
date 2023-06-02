import React, {useState}from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Container,Row,Col,Navbar, Nav,NavDropdown} from 'react-bootstrap';
// import Chart from 'react-google-charts'
import Chart from 'react-apexcharts'
const raw_data = [
{
    name: "供給", //will be displayed on the y-axis
    data: [1750.5]
},
{
    name: "需求", //will be displayed on the y-axis
    data: [1609.5]
}
];
const options = {
chart: {
    id: "bar",
    height: 350
},

xaxis: {
    categories: [''] //will be displayed on the x-asis
},
stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
},
plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '80%',
      endingShape: 'rounded'
    },
},
};



const ElectronicPage=()=>{

    let Page = "Electronic"
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
                    <div className="container mt-5">
                    <h2>電力供需狀況(單位: 萬瓩)</h2>
                    <Chart options={options} type="bar" series={raw_data } width="80%" />
                    </div>
                </Row>
                {/* <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                </Row> */}
            </Container>
                  
            </main>
        </>
      );
}

export default ElectronicPage;