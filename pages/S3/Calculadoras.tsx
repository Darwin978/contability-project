import React, {useEffect, useState} from "react";
import Menu from "../../components/menu";
import {Footer} from "../../components/footer";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {monthsTable} from "../../components/Models/monthsTable";
import {InputNumber} from "primereact/inputnumber";
import "bootstrap/dist/css/bootstrap.min.css"
import "primereact/resources/primereact.min.css";
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import {TabPanel, TabView} from "primereact/tabview";


export const Calculadoras = () => {
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
    const [months, setMonths] = useState<monthsTable[]>(
        [
            {month: "ENERO", amount: 0},
            {month: "FEBRERO", amount: 0},
            {month: "MARZO", amount: 0},
            {month: "ABRIL", amount: 0},
            {month: "MAYO", amount: 0},
            {month: "JUNIO", amount: 0},
            {month: "JULIO", amount: 0},
            {month: "AGOSTO", amount: 0},
            {month: "SEPTIEMBRE", amount: 0},
            {month: "OCTUBRE", amount: 0},
            {month: "NOVIEMBRE", amount: 0},
            {month: "DICIEMBRE", amount: 0}
        ]);

    const [total, setTotal] = useState(0);

    const suma = (data) => {
        const suma = data.reduce((total, item) => total + item.amount, 0);
        return suma
    }


    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(rowData.amount);
    };

    const cellEditor = (options) => {
        if (options.field === 'amount') return priceEditor(options);
    };
    const priceEditor = (options) => {
        return <InputNumber className="p-fluid p-inputtext-sm" value={options.amount}
                            onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD"
                            locale="en-US"/>;
    };

    const isPositiveInteger = (val) => {
        let str = String(val);

        str = str.trim();

        if (!str) {
            return false;
        }

        str = str.replace(/^0+/, '') || '0';
        let n = Math.floor(Number(str));

        return n !== Infinity && String(n) === str && n >= 0;
    };
    const onCellEditComplete = (e) => {
        let {rowData, newValue, field, originalEvent: event} = e;

        switch (field) {
            case 'amount':
                if (isPositiveInteger(newValue)){
                    rowData[field] = newValue;
                    updateTotalAmount();
                }
                else event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0) rowData[field] = newValue;
                else event.preventDefault();
                break;
        }
    };

    const updateTotalAmount = () => {
        const sum = months.reduce((acc, row) => acc + row.amount, 0);
        setTotal(sum/12);
    };

    const handleClean = () =>{
        setMonths([{month: "ENERO", amount: 0},
            {month: "FEBRERO", amount: 0},
            {month: "MARZO", amount: 0},
            {month: "ABRIL", amount: 0},
            {month: "MAYO", amount: 0},
            {month: "JUNIO", amount: 0},
            {month: "JULIO", amount: 0},
            {month: "AGOSTO", amount: 0},
            {month: "SEPTIEMBRE", amount: 0},
            {month: "OCTUBRE", amount: 0},
            {month: "NOVIEMBRE", amount: 0},
            {month: "DICIEMBRE", amount: 0}])
        setTotal(0)
    }

    return (<>
        <Menu></Menu>
        <Card style={cardStyle}>
            <TabView style={{backgroundColor: "black"}}>
                <TabPanel header="Décimo Tercer Sueldo" >
                    <div className="d-flex justify-content-center bold"><h2>SIFCON</h2></div>
                    <div className="d-flex justify-content-center"><h4>Calculadora Contable - Décimo Tercer Sueldo</h4></div>
                    <div className="d-flex row ">
                        <div className="col-6 justify-items-center">
                            <DataTable value={months} editMode="cell"  size="small" stripedRows  >
                                <Column header="MES" field="month" align="center"></Column>
                                <Column header="REMUNERACION RECIBIDA" field="amount" align="center"
                                        body={priceBodyTemplate}
                                        editor={cellEditor} onCellEditComplete={onCellEditComplete}></Column>
                            </DataTable>
                        </div>
                        <div className="col-4 justify-content-center">

                            <div className="d-flex  mt-5 row align-items-center p-inputtext-sm">
                                <div className="d-flex col-3 align-content-start font-bold"> Total a Recibir:</div>
                                <div className="col-2"></div>
                                <div className="col-7 p-fluid justify-content-end">
                                    <InputNumber value={total} className="p-inputtext-sm" style={{width:"100%"}} mode="currency" currency="USD"
                                                 locale="en-US"></InputNumber></div>
                            </div>
                            <div className="mt-2 row align-items-center">
                                <div className = "d-flex col-12 justify-content-center align-items-center">
                                    <Button className="p-button-danger" label="Limpiar" onClick={handleClean}></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel header="Décimo Cuarto Sueldo"></TabPanel>
                <TabPanel header="Liquidaciones"></TabPanel>
                <TabPanel header="Salario Digno"></TabPanel>
                <TabPanel header="Jubilación Patronal"></TabPanel>
            </TabView>
        </Card>
        <Footer></Footer>
    </>)
}

export default Calculadoras;