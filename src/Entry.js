import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Button ,Image} from 'react-bootstrap';

const EntryPage=()=>{
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        backgroundColor:"#FF2E63",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>Meteorological center </h1>
            <Button href="/earthquake">Entry</Button>
        </div>
    )
}

export default EntryPage;