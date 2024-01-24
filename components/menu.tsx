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

    const items: MenuItem[] = [
        {
            label: 'Normativa Vigente- S1',
            data: 'root',
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            {label: 'Leyes Tributarias LORTI', icon: 'pi pi-list', template: itemRenderer},
                            {label: 'Código Tributario', icon: 'pi pi-users', template: itemRenderer},
                            {label: 'Código de Trabajo', icon: 'pi pi-file', template: itemRenderer}
                        ]
                    }
                ],
            ]
        },
        {
            label: 'Normativa Contable - S2',
            data: 'root',
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            {label: 'NIC', icon: 'pi pi-list', template: itemRenderer},
                            {label: 'NIFF', icon: 'pi pi-users', template: itemRenderer}
                        ]
                    }
                ],
            ]

        },
        {
            label: 'Calculadoras - S3',
            data: 'root',
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            {label: 'Calculadora Tributaria', icon: 'pi pi-list', template: itemRenderer},
                            {label: 'Calculadora Laboral', icon: 'pi pi-users', template: itemRenderer},
                            {label: 'Calculadora Contable', icon: 'pi pi-file', template: itemRenderer}
                        ]
                    }
                ],
            ]
        },
        {
            label: 'Formularios - S4',
            data: 'root',
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            {label: 'SRI (IVA-IR)', icon: 'pi pi-list', template: itemRenderer}
                        ]
                    }
                ],
            ]
        },
        {
            label: 'Proceso Contable - S5',
            data: 'root',
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            {label: 'Libro diario', icon: 'pi pi-list', template: itemRenderer},
                            {label: 'Mayorizacion', icon: 'pi pi-users', template: itemRenderer},
                            {label: 'Balance', icon: 'pi pi-file', template: itemRenderer}
                        ]
                    }
                ],
            ]
        },
        {
            label: 'Inf. Financiera - S6',
            data: 'root',
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            {label: 'ESF', icon: 'pi pi-list', template: itemRenderer},
                            {label: 'E. Resultados', icon: 'pi pi-users', template: itemRenderer},
                            {label: 'E. Flujos de Efectivo', icon: 'pi pi-file', template: itemRenderer},
                            {label: 'E. Cambios en el patrimonio', icon: 'pi pi-file', template: itemRenderer}
                        ]
                    }
                ],
            ]
        },
        {
            label: 'Tareas - S7',
            data: 'root',
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            {label: 'Tareas de los estudiantes por su institucion', icon: 'pi pi-list', template: itemRenderer},
                            {label: 'Tareas propuestas por SIFCON', icon: 'pi pi-users', template: itemRenderer},
                        ]
                    }
                ],
            ]
        },
        {
            label: 'Evaluaciones - S8',
            data: 'root',
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            {label: 'Pruebas', icon: 'pi pi-list', template: itemRenderer},
                            {label: 'Lecciones', icon: 'pi pi-users', template: itemRenderer},
                            {label: 'Mecanismos para reforzar', icon: 'pi pi-file', template: itemRenderer}
                        ]
                    }
                ],
            ]
        }
    ];

    const start = (
        <div>
            <Avatar
                image="https://res.cloudinary.com/dqtu46lne/image/upload/v1706061073/proyect_contability/rjunpc2ge23nmxth55xo.png"
                shape="circle" size="xlarge"/>
        </div>
    );
    const end = <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"/>;


    return (
        <div className="card">
            <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px"
                      className="p-3" style={{borderRadius: '0rem'}}/>
        </div>
    )
}