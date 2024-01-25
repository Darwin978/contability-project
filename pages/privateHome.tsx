import React, {ReactElement} from "react";
import {Footer} from "../components/footer";
import Menu from "../components/menu";
import {Image} from "primereact/image";
import {Card} from "primereact/card";

const privateHome = () =>{
    const overlayCardStyle = {
        width: '400px',
        height: '400px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente
    };
    const cardStyle = {
        backgroundImage: 'url("https://res.cloudinary.com/dqtu46lne/image/upload/v1706152911/proyect_contability/vbckj6ulp5xsn87a7arh.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        height: '100vh',
        flex: 1
    };
    return(
        <>
            <header>
                <Menu></Menu>
            </header>
            <Card style={cardStyle}>
            </Card>
            <Footer></Footer>
        </>
    )
}

export default privateHome;