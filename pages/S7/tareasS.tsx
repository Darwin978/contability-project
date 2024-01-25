import React from "react";
import Menu from "../../components/menu";
import {Footer} from "../../components/footer";
import {Card} from "primereact/card";
import {TabPanel, TabView} from "primereact/tabview";


export const tareasS = () => {
    const cardStyle = {
        backgroundImage: 'url("https://res.cloudinary.com/dqtu46lne/image/upload/v1706152911/proyect_contability/vbckj6ulp5xsn87a7arh.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        height: '100vh',
        flex: 1
    };
    return (<>
        <Menu></Menu>
        <Card>
            <TabView style={{backgroundColor: "black"}}>
                <TabPanel header="Contabilidad Básica">
                    <h2>Información Empresarial</h2>
                    <p>Fecha: 01 de diciembre de 2010</p>
                    <p>Propietario: Arturo León</p>

                    <h3>Operaciones:</h3>
                    <ul>
                        <li>01 de diciembre: Arturo León propietario de Almacenes “Mi Almacén” Ltda., reinicia
                            actividades correspondientes al presente mes. Para tal efecto, se cuenta con la siguiente
                            información:
                            <ul>
                                <li>Pérdidas Acumuladas $ 28.550,00</li>
                                <li>Efectivo depositado en Caja de Ahorro del Banco Unión S.A. por $ 15.000,00</li>
                                <li>Préstamo pagadero en 3 años, al 9% anual, con amortizaciones mensuales, otorgado por
                                    el Banco Crédito $ 25.000,00
                                </li>
                                <li>Efectivo depositado en Cuenta Corriente N° 123-45 del Banco La Paz $ 34.750,00</li>
                                <li>Letra de Cambio No 222 girada a favor de Casa Calo y Crespo por $ 18.550,00</li>
                                <li>Letra de Cambio No 111 girada por Betty Gordillo por $ 22.650,00</li>
                                <li>Depósito de la empresa en Importadora “Ira” a cuenta de futuras compras por $
                                    12.000,00
                                </li>
                                <li>Muebles valuados en $ 47.400,00.</li>
                                <li>Gastos desembolsados por obtención de personería jurídica $ 5.125,00.</li>
                                <li>Equipos de Computación valuados en $ 30.075,00</li>
                                <li>Alquileres cobrados por la empresa hasta el 30 de septiembre de 2011 $ 10.000,00
                                </li>
                                <li>Sueldos pendientes de pago a favor de Armando Paredes por $ 5.000,00</li>
                                <li>Cinco Acciones del “Banco Sol” S.A. cada una con un valor nominal de $ 1.000,00</li>

                            </ul>
                        </li>
                        <li>03 de diciembre.- Esteban Toro deposita en la empresa $ 7.500,00 en cheque girado contra
                            el Banco Ganadero, a cuenta de futuras compras.
                        </li>
                        <li>06 de diciembre.- Se compran mercaderías por $ 25.500,00 según factura No. 987 de
                            Importadora “Tierra” Ltda., cancelándose el 20% con cheque No 101 del Banco La Paz y por
                            el saldo se suscriben 2 letras de cambio a 20 y 40 días plazo respectivamente.
                        </li>
                        <li>09 de diciembre.- Se venden mercaderías por $ 32.240,00 según factura No 701 emitida en
                            favor de Esteban Toro, al efectuarse el cobro se deduce el anticipo de fecha 3 de
                            diciembre y el saldo es coberturado: 40% en efectivo y lo restante con dos letras de
                            cambio a 5 y 10 días plazo respectivamente.
                        </li>
                        <li>12 de diciembre.- Arturo León disminuye sus aportes de capital en $ 5.000,00 mediante
                            cheque No 102 del Banco La Paz.
                        </li>
                        <li>15 de diciembre.- La empresa recibe $ 4.200,00 por concepto de comisiones vigentes hasta
                            el 19 de marzo de 2011, razón por la cual emite Factura No 702 a favor de Calo y Calvo.
                        </li>
                        <li>18 de diciembre.- Mediante cheque No 103 del Banco La Paz, la entidad cancela $ 3.600,00
                            por concepto de publicidad vigente hasta el 23 de febrero de 2011, obteniendo Factura No
                            456 de Radio Cultura.
                        </li>
                        <li>21 de diciembre.- Esteban Toro cancela su primera letra de cambio suscrita el 09 de
                            diciembre, con recargo del 18,75% de interés bimestral, razón por la cual se emite
                            Factura No 703.
                        </li>
                        <li>24 de diciembre.- La empresa compra para su uso un juego de Escritorios en $ 10.400,00
                            según contrato correspondiente, razón por la cual se efectúa retenciones y el saldo es
                            cancelado con cheque No 104 del Banco La Paz.
                        </li>
                        <li>27 de diciembre.- La entidad recibe mercaderías por $ 27.500,00, y un talonario de
                            Facturas No 501 - 550, para ser vendidas a nombre y por cuenta de Comercializadora
                            “Tino”.
                        </li>

                        <li>31 de diciembre.- La empresa realiza los siguientes pagos:
                            <ul>
                                <li>$ 8.160,00 con cheque No 105 del Banco La Paz S. A., por concepto de haberes al
                                    personal.
                                </li>
                                <li>$ 3.120,00 en efectivo, por concepto de publicidad a Radio “Sol” según Factura No
                                    321.
                                </li>
                                <li>$ 2.260,00 con cheque No 106 del Banco La Paz, por concepto de mantenimiento según
                                    Factura
                                    No 654.
                                </li>
                                <li>$ 3.000,00 con cheque No 107 del Banco La Paz, por concepto de seguros vigentes
                                    hasta el 31
                                    de mayo de 2011, a Aseguradora “La Paz” S.A. según Factura No 765.
                                </li>
                            </ul>
                        </li>
                        <li>
                            SE PIDE:
                            <ul>
                                <li>Balance al 01 de diciembre de 2010.</li>
                                <li>Registros de Diario (comprobantes).</li>
                                <li>Registros de Mayor.</li>
                                <li>Balance de Comprobación.</li>
                                <li>Hoja de Trabajo.</li>
                                <li>Estados Financieros.</li>
                                <li>Cierre de Registros.</li>
                                <li>Reapertura de Registros.</li>
                            </ul>
                        </li>
                    </ul>
                </TabPanel>
                <TabPanel header="Contabilidad de Costos"></TabPanel>
                <TabPanel header="Contabilidad Agropecuaria"></TabPanel>
                <TabPanel header="Contabilidad Bancaria"></TabPanel>
                <TabPanel header="Tributación"></TabPanel>
                <TabPanel header="Laboral"></TabPanel>
            </TabView>
        </Card>
        <Footer></Footer>
    </>)
}

export default tareasS;