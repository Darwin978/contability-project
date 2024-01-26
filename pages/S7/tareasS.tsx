import React from "react";
import Menu from "../../components/menu";
import {Footer} from "../../components/footer";
import {Card} from "primereact/card";
import {TabPanel, TabView} from "primereact/tabview";
import {Image} from "primereact/image";


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
                <TabPanel header="Contabilidad de Costos">
                    <p>La compañía industrial de pinturas “Mi Pintura” S.A. cuenta con los siguientes departamentos;
                        cada uno de ellos es considerado como un área de responsabilidad:</p>
                    <h2>Departamento de Producción:</h2>
                    <ul>
                        <li>Mezclado</li>
                        <li>Filtrado</li>
                        <li>Condensado</li>
                        <li>Envasado</li>
                    </ul>
                    <h2>Servicios:</h2>
                    <ul>
                        <li>Control de calidad</li>
                        <li>Mantenimiento</li>
                    </ul>
                    <p>Considerando la siguiente información efectúe el prorrateo primario y secundario de los gastos de
                        fabricación. Los costos presupuestados de las diferentes partidas que son utilizadas por
                        diferentes departamentos de servicios y de línea son:</p>
                    <Image
                        src="https://res.cloudinary.com/dqtu46lne/image/upload/v1706239903/proyect_contability/bbukear4wnwno1hmqmgf.jpg"></Image>
                    <p>Las instalaciones de la compañía ocupan un área de 7.000 metros cuadrados.
                        Información sobre las bases a utilizar para prorrateo primario.
                    </p>
                    <Image
                        src="https://res.cloudinary.com/dqtu46lne/image/upload/v1706239903/proyect_contability/b2vqnijxt2ahvfojexfn.jpg"></Image>
                    <p>Información respecto a las bases para efectuar el prorrateo secundario:</p>
                    <Image
                        src="https://res.cloudinary.com/dqtu46lne/image/upload/v1706239904/proyect_contability/k8iezupnzrg1ac1dwycz.jpg"></Image>
                    <h3>Se pide:</h3>
                    <p>distribuir los gastos indirectos de fabricación.</p>


                </TabPanel>
                <TabPanel header="Contabilidad Agropecuaria">
                    <p>La empresa "EL PANTANAL", dedicada a la explotación de cría y recría, inicia sus actividades el 1
                        de julio de 2001, con los siguientes aportes:</p>
                    <Image src="https://res.cloudinary.com/dqtu46lne/image/upload/v1706239903/proyect_contability/ewh7ehsh2l00olxtssij.jpg"></Image>
                    <p>El Hato de ganado vacuno al inicio de actividades está clasificado de la siguiente manera:</p>
                    <Image src="https://res.cloudinary.com/dqtu46lne/image/upload/v1706239903/proyect_contability/esve0claglfrtrytzzie.jpg"/>
                    <Image src="https://res.cloudinary.com/dqtu46lne/image/upload/v1706239903/proyect_contability/woilzipe3ypqqslttpal.jpg"/>
                    <p>Durante la presente gestión se efectuaron las siguientes transacciones:</p>
                    <ol>
                        <li>La compra de 2.000 dosis de reconstituyentes (INYACOM) a $. 45,00 por dosis, como la
                            adquisición de 4.000 dosis de vacuna contra la aftosa a $. 6,50 por dosis, de la Veterinaria
                            "SAN ROQUE", cancelados con fondos de compras y el saldo por caja.
                        </li>
                        <li> Para la reparación de las viviendas de los peones vaqueros, se contrata personal eventual,
                            a quienes se les cancela mediante caja la suma de $. 1.200,oo por el trabajo ejecutado.
                        </li>
                        <li>La planilla de mortandad presentada por el administrador registra las siguientes bajas por
                            diferentes causas:
                        </li>
                        <ul>
                            <li>2 terneros machos</li>
                            <li>5 terneros hembras</li>
                            <li>5 novillos de 1 año</li>
                            <li>2 novillos de 3 años</li>
                        </ul>
                        <li>Durante la presente gestión se sacrificaron 4 novillos de 3 años, para alimentación del
                            personal de planta.
                        </li>
                        <li>La planilla de sueldos y salarios, previa retención para la Federación de campesinos
                            asciende a $. 24.000,00, cancelados mediante caja.
                        </li>
                        <li>Se concreta la venta de ganado de acuerdo a los siguientes términos:</li>
                        <ul>
                            <li> 25 cabezas de 3 años promedio por cabeza 398 Kg.</li>
                            <li>Precio por kilo puesto estancia $. 5,20</li>
                            <li>Se le reconoce la merma del 2%</li>
                            <li>Por trabajo del faeneo recupera la suma de $. 60,00 por cabeza.</li>
                        </ul>
                        <li>Tomando en cuenta las transacciones anteriores se realiza la vacunación de todo el ganado
                            vacuno como del caballar contra la fiebre aftosa.
                        </li>
                        <li>En la presente gestión se compraron alimentos suplementarios de la empresa "EL PAURO" por un
                            monto de $. 25.000,00, utilizados en su totalidad únicamente en reproductores machos y
                            hembras, de la misma manera se aplicaron reconstituyentes.
                        </li>
                        <li>La parición en este período alcanza a un 58%</li>
                        <li>Con los ajustes correspondientes elaborar un Balance General y Estado de Resultados por la
                            presente gestión
                        </li>
                    </ol>
                </TabPanel>
                <TabPanel header="Contabilidad Bancaria">
                    <p>El Banco de la Unión registra las siguientes operaciones en la sección caja:</p>
                    <ol>
                        <li>Recibe depósitos en efectivo para depósitos en caja de ahorros $ 3000.</li>
                        <li>Recibe depósitos en efectivo para cuentas comentes $ 5000.</li>
                        <li>Recibe depósitos en efectivo para depósitos a plazo fijo$ 2000.</li>
                        <li>Recibe depósitos en efectivo para giros al interior $ 3000.</li>
                        <li>Recibe depósitos de cheques propios para abono en Cta. Cte. $ 5000.</li>
                        <li>Recibe depósitos de cheques propios para abono en caja de ahorro $ 2000.</li>
                        <li>Cancela el cajero su falla del día anterior$ 400.</li>
                        <li>Efectúa un pase a Caja 2 por $ 3000.</li>
                        <p>Nota: No registra pase de bóveda</p>
                    </ol>
                </TabPanel>
                <TabPanel header="Tributación">
                    <ol>
                        <li>Impuesto a la Renta personas naturales</li>
                        <p>El Señor Miguel Ángel Pérez Jaramillo con RUC 091229547001 durante el ejercicio económico 2010, ha tenido las siguientes actividades:</p>

                        <ol>
                            <li>El Sr. trabaja en la empresa EXAMEN S.A. bajo relación de dependencia, el recibió por concepto de sueldo en el año US $70.000. Adicionalmente recibió US $7.000 por concepto de utilidades del ejercicio 2009. La empresa reconoce de manera legal el décimo tercer y décimo cuarto sueldo que es de $6.000 y $264 respectivamente. Al terminar el año no declaró gastos personales.</li>
                            <li>Por asesoría y capacitaciones en libre ejercicio profesional de acuerdo a su profesión, obtuvo ingresos durante el año de US $8.000.  Estos servicios fueron prestados el 60% a sociedades. Adicionalmente sus gastos relacionados con el ejercicio profesional sustentados con comprobantes de venta autorizados por el SRI suman US $ 2.500.</li>
                            <li>El 1 de Julio del 2010, invirtió $60.000 en una póliza de inversión la mantuvo hasta fin de año en el “Banco Interamericano”, y le generó un interés de 4% anual.</li>
                            <li>Tiene en el Centro Comercial “San Marino”, un local de venta de ropa importada que ha generado US $ 70.000 de ingresos y US $40.000 de gastos que se encuentran sustentados en comprobantes de venta válidos.  Las ventas realizadas fueron un 30% a sociedades.</li>
                            <li>Es propietario de un bien inmueble, avaluado en US $ 165.000 y le arrienda al señor Gustavo Peralta su departamento en Salinas a $1.500 desde Enero del 2010 hasta Noviembre del 2010.  El señor Peralta es gerente de la compañía Finanzas S.A. y el pago del arriendo lo hace dicha compañía. Gasto el Sr. Perez en el año US$ 900 para el mantenimiento del bien inmueble. Por otro lado, cancela $600 por concepto de impuesto predial.</li>
                            <li>El anticipo de impuesto a la renta pagado el año anterior fue de US $ 4.000</li>
                        </ol>
                        <ul>
                            <h3>Se pide:</h3>
                            <li>Calcular las retenciones en la fuente que le fueron realizadas.</li>
                            <li>Liquidar el impuesto a la renta del contribuyente.</li>
                        <li>Considerar que la declaración se realiza dentro del plazo respectivo.</li>
                        </ul>
                    </ol>
                </TabPanel>
                <TabPanel header="Laboral">
                    <p>Realice el cálculo de la jubilación patronal de:</p>
                    <ul>
                        <li>Empleado: Mujer de 65 años</li>
                        <li>Tiempo de trabajo:22 años</li>
                        <li>Sueldo mensual: $564</li>
                    </ul>
                </TabPanel>
            </TabView>
        </Card>
        <Footer></Footer>
    </>)
}

export default tareasS;