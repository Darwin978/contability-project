import React, {useState} from 'react';
import {MenuItem} from 'primereact/menuitem';
import {MegaMenu} from "primereact/megamenu";
import {Avatar} from "primereact/avatar";
import {Ripple} from "primereact/ripple";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import {Button} from "primereact/button";
import Link from "next/link";

export default function Menu() {
    const itemRenderer = (item, options) => {
        if (item.data == 'root') {
            return (
                <a className="d-flex justify-content-center m-3 align-items-center cursor-pointer overflow-hidden relative font-semibold  uppercase p-ripple hover:surface-ground"
                   style={{borderRadius: '2rem'}} onClick={options.onClick}>
                    <span className={item.icon}/>
                    <span className="ml-2">{item.label}</span>
                    <Ripple/>
                </a>
            );
        } else if (!item.image) {
            return (
                <a className="cursor-pointer" onClick={options.onClick} style={{width:"300px"}}>
                    <div className="row align-items-center">
                        <div className="col-2">

                        </div>
                        <div className="col-10">
                            <span className="inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem">
                            <i className={`${item.icon} `}></i>
                          </span>
                            <span className="font-normal">{item.label}</span>
                        </div>
                    </div>
                </a>
            );
        }
    };


    const itemsMenu = [
        {
            label: 'Normativa Vigente- S1',
            icon: 'pi pi-bars',
            items: [
                [
                    {
                        label: 'S1',
                        items: [{ label: 'Leyes Tributarias LORTI', command:()=>{window.open("https://drive.google.com/file/d/1xSz6f2eOyitjOdYDsg1FAtGDmYbm5gh5/view?usp=sharing", "_blank")} }, { label: 'Código Tributario' }, { label: 'Código de Trabajo' }]
                    }
                ]
                ]
        },
        {
            label: 'Normativa Contable - S2',
            icon: 'pi pi-box',
            items: [
                [
                    {
                        label: 'S2',
                        items: [{ label: 'NIC', command:()=>{window.open("https://drive.google.com/file/d/14wrbazgQS_ZQUWT9zCyiMQH8KUnXy8s3/view?usp=sharing", "_blank")} }, { label: 'NIFF' }]
                    }
                ]
            ]
        },
        {
            label: 'Calculadoras - S3',
            icon: 'pi pi-calculator',
            items: [
                [
                    {
                        label: 'S3',
                        items: [{ label: 'Calculadora Tributaria' }, { label: 'Calculadora Laboral' }, { label: 'Calculadora Contable', url:'/S3/Calculadoras' }]
                    }
                ]
            ]
        },
        {
            label: 'Formularios - S4',
            icon: 'pi pi-briefcase',
            items: [
                [
                    {
                        label: 'S4',
                        items: [{ label: 'SRI (IVA-IR)', command:()=>{window.open("https://docs.google.com/spreadsheets/d/1Mw2mzOpKaSF7R_lii7RYoSk1g9BhCHBt/edit?usp=sharing&ouid=110999749554107028790&rtpof=true&sd=true", "_blank")} }]
                    }
                ]
            ]
        },
        {
            label: 'Proceso Contable - S5',
            icon: 'pi pi-book',
            items: [
                [
                    {
                        label: 'S1',
                        items: [{ label: 'Libro diario', command:()=>{window.open("https://docs.google.com/spreadsheets/d/13LIYbWFppjkyz6tvYtFIwwMdOTMJ1eIj/edit?usp=sharing&ouid=110999749554107028790&rtpof=true&sd=true", "_blank")} }, { label: 'Mayorizacion' }, { label: 'Balance' }]
                    }
                ]
            ]
        },
        {
            label: 'Inf. Financiera - S6',
            icon: 'pi pi-chart-bar',
            items: [
                [
                    {
                        label: 'S1',
                        items: [{ label: 'ESF' }, { label: 'E. Resultados', command:()=>{window.open("https://docs.google.com/spreadsheets/d/1_tQRN4iriROrvx84Qd4WVHbki3NlDcqW/edit?usp=sharing&ouid=110999749554107028790&rtpof=true&sd=true", "_blank")} }, { label: 'E. Flujos de Efectivo' }, {label: 'E. Cambios en el patrimonio'}]
                    }
                ]
            ]
        },
        {
            label: 'Modulo Educativo',
            icon: 'pi pi-copy',
            items: [
                [
                    {
                        label: 'Tareas S7',
                        items: [{ label: 'Tareas de los estudiantes por su institucion', url: "/S7/tareasU" }, { label: 'Tareas propuestas por SIFCON', url:"/S7/tareasS"}]
                    }
                ],
                [
                    {
                        label: 'Evaluaciones S8',
                        items: [{ label: 'Pruebas', command:()=>{window.open("https://docs.google.com/document/d/1q9BcIQ5-d5_LnkBbPwCV9yL9nx9yEg3U/edit?usp=sharing&ouid=110999749554107028790&rtpof=true&sd=true", "_blank")} }, { label: 'Lecciones' }, { label: 'Mecanismos para reforzar' }]
                    }
                ]
            ]
        }
    ];
    const start = (
        <div>
            <Link href="/">
            <Avatar
                image="https://res.cloudinary.com/dqtu46lne/image/upload/v1706061073/proyect_contability/rjunpc2ge23nmxth55xo.png"
                shape="circle" size="xlarge"/>
            </Link>
        </div>
    );
    const end = <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"/>;


    return (
        <div className="card">
            {/*<MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px"*/}
            {/*          className="p-3" style={{borderRadius: '0rem'}}/>*/}
            <MegaMenu start={start} model={itemsMenu} breakpoint="960px" />
        </div>
    )
}