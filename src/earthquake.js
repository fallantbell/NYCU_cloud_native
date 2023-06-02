import React, {useState}from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Container,Row,Col,Navbar, Nav,NavDropdown} from 'react-bootstrap';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
const center = [23.80273601673441, 120.97529630945223]
const raw_data = [
    {
        name: '南投',
        data: '6月2日',
        time: '上午3點10分',
        position: [23.80273601673441, 120.97529630945223],
        scale: 7,
    },
    {
        name: '台中',
        data: '6月2日',
        time: '上午3點10分',
        position: [24.18481937986299, 120.66069568187251],
        scale: 2,
    },
    {
        name: '宜蘭',
        data: '6月2日',
        time: '上午3點10分',
        position: [24.79980524952734, 121.72219135843488],
        scale: 3,
    }
]

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
                <Container fluid style={{height: '85vh'}}>
                    <Row >
                        <Col sm>
                            <div> 
                                <MapContainer
                                    center={center}
                                    zoom = {9}
                                    style ={{ width: '50vw', height: '80vh'}}
                                >
                                    <TileLayer
                                        url = "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Dt8im9lnEKjCm1fOF6od"
                                        attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                                    >
                                    </TileLayer>
                                    {raw_data.map((item) => (
                                        <Marker position={item.position}>
                                            <Popup>
                                                震央: {item.name} <br /> 
                                                日期: {item.data} <br /> 
                                                時間: {item.time} <br />  
                                                芮氏規模: {item.scale}
                                            </Popup>
                                        </Marker>
                                    ))}
                                </MapContainer>
                            </div>
                        </Col>
                        <Col>
                        <table class="table earthquakeInfoTable">
                            <thead>
                                <tr>
                                    <th>位置</th>
                                    <th>日期</th>
                                    <th>時間</th>
                                    <th>規模</th> 
                                </tr>
                            </thead>
                            {raw_data.map((item) => (
                                <tbody>
                                    <tr class="btnInfo">
                                    <td>{item.name}</td>
                                    <td>{item.data}</td>
                                    <td>{item.time}</td>
                                    <td>{item.scale}</td>
                                    </tr>
                                </tbody>                  
                            ))}
                
                        </table>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
      );
}

export default EarthquakePage;
