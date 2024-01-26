import Link from "next/link";
import Layout from "../components/Layout";
import {Card} from "primereact/card";
import {Image} from "primereact/image";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Password} from "primereact/password";
import {router} from "next/client";
import "bootstrap/dist/css/bootstrap.min.css"

const cardStyle = {
    backgroundImage: 'url("https://res.cloudinary.com/dqtu46lne/image/upload/v1706056718/proyect_contability/tjkzb3dxanjji04v1xnz.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    height: '100vh',
    flex: 1
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
     // Esto asegura que el contenedor ocupe el 100% de la altura de la ventana
};

const overlayCardStyle = {
    width: '400px',
    height: '400px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente
};

const IndexPage = () => (
    <Layout title="SIFCON">
        <div>
            <Card style={cardStyle}>
                <Card style={overlayCardStyle}>
                    <div className="block text-center align-items-center  border-round mb-3">
                        <Image className="align-content-center" src={"https://res.cloudinary.com/dqtu46lne/image/upload/v1706242497/proyect_contability/bssq1lr1cs4flhlyxpv3.jpg"} width="200px"></Image>
                    </div>
                    <div className="row align-items-center p-inputtext-sm">
                        <div className="row align-items-center p-inputtext-sm">
                            <div className="col-3 align-content-start font-bold"> USUARIO:</div>
                            <div className="col-2"></div>
                            <div className="col-7 p-fluid justify-content-end">
                                <InputText className="p-inputtext-sm" style={{width:"100%"}}></InputText></div>
                        </div>

                        <div className="row align-items-center p-inputtext-sm">
                            <div className="col-3 font-bold align-content-start"> CONTRASEÑA:</div>
                            <div className="col-2"></div>
                            <div className="col-7 p-fluid justify-content-end">
                                <Password toggleMask  feedback={false} className="p-inputtext-sm" style={{width:"100%"}}></Password></div>
                        </div>
                    </div>
                    <div className="block text-center align-items-center  border-round mb-3 mt-2">
                        <Link href="/privateHome">
                        <Button   label="INGRESAR" className=" col-4 p-button-sm p-button-secondary" ></Button>
                        </Link>
                    </div>
                </Card>
            </Card>
        </div>
    </Layout>
);

export default IndexPage;
