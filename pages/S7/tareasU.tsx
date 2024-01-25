import React, {useState} from "react";
import Menu from "../../components/menu";
import {Footer} from "../../components/footer";
import {Card} from "primereact/card";
import {Image} from "primereact/image";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";

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

const overlayCardStyle = {
    width: '400px',
    height: '300px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente
};
export const tareasU = () => {
    const [selectUniversity, setSelectUniversity] = useState(null);
    const university = [
        { name: 'Universidad de Cuenca (UCUENCA) ', code: 'ucuenca' },
        { name: 'Universidad Nacional de Educación ', code: 'RM' },
        { name: 'Universidad Católica de Cuenca (UCACUE) ', code: 'LDN' },
        { name: 'Universidad del Azuay (UAZUAY) ', code: 'IST' },
        { name: 'Universidad Panamericana de Cuenca ', code: 'PRS' },
        { name: 'Universidad Politécnica Salesiana (UPS) ', code: 'PR' }
    ];

    return (<>
        <Menu></Menu>
        <Card style={cardStyle}>
            <Card style={overlayCardStyle}>
                <div className="row align-items-center p-inputtext-sm">
                    <div className="block text-center align-items-center  border-round mb-3 mt-2">
                            <Dropdown options={university} style={{width:"100%"}} optionLabel="name" value={selectUniversity} onChange={(e)=>setSelectUniversity(e.value)}  placeholder="Escoga su Institucion" className=" p-button-sm p-button-secondary" ></Dropdown>
                    </div>
                    <div className="row align-items-center p-inputtext-sm">
                        <div className="col-3 align-content-start font-bold"> USUARIO:</div>
                        <div className="col-2"></div>
                        <div className="col-7 p-fluid justify-content-end">
                            <InputText className="p-inputtext-sm" style={{width: "100%"}}></InputText></div>
                    </div>

                    <div className="row align-items-center p-inputtext-sm">
                        <div className="col-3 font-bold align-content-start"> CONTRASEÑA:</div>
                        <div className="col-2"></div>
                        <div className="col-7 p-fluid justify-content-end">
                            <Password toggleMask feedback={false} className="p-inputtext-sm"
                                      style={{width: "100%"}}></Password></div>
                    </div>
                    <div className="block text-center align-items-center  border-round mb-3 mt-2">
                        <Link href="/S7/LoginU">
                            <Button   label="INGRESAR" className=" col-4 p-button-sm p-button-secondary" ></Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </Card>
        <Footer></Footer>
    </>)
}

export default tareasU;