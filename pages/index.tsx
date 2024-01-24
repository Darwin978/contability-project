import Link from "next/link";
import Layout from "../components/Layout";
import {Card} from "primereact/card";
import {Image} from "primereact/image";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Password} from "primereact/password";
import {width} from "dom-helpers";

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
                        <Image className="align-content-center" src={"https://res.cloudinary.com/dqtu46lne/image/upload/v1706061073/proyect_contability/rjunpc2ge23nmxth55xo.png"} width="200px"></Image>
                    </div>
                    <div className="block  font-bold text-center p-1 border-round mb-3">
                        <div className="flex">
                            <div className="flex-initial flex align-items-center  justify-content-start  font-bold px-0 py-3 border-round"> USUARIO:</div>
                            <div className="flex-initial flex align-items-end justify-content-end font-bold px-2 py-3 border-round">
                                <InputText className="p-inputtext-sm" style={{width:"80%"}}></InputText></div>
                        </div>

                        <div className="row align-items-center p-inputtext-sm">
                            <div className="col-3 align-content-start"> CONTRASEÑA:</div>
                            <div className="col-4 align-content-end ">
                                <Password className="p-inputtext-sm"></Password></div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <Button  label="INGRESAR" className="col-4 p-button-sm p-button-secondary" ></Button>
                    </div>
                </Card>
            </Card>
            <h1>Proyecto de Contabilidad</h1>
        </div>
    </Layout>
);

export default IndexPage;
