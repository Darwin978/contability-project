import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';

export default function Menu() {
    const [activeIndex, setActiveIndex] = useState<number>(3);
    const items: MenuItem[] = [
        { label: 'HOME', icon: 'pi pi-home' },
        { label: 'Transacciones', icon: 'pi pi-chart-line' },
        { label: 'Biblioteca', icon: 'pi pi-list' },
        { label: 'Reportes', icon: 'pi pi-inbox' },
        { label: 'Calculadora', icon: 'pi pi-inbox' }
    ];

    return (
        <div className="card">
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        </div>
    )
}