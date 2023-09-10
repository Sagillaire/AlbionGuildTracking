import { FC } from 'react';
import { Tabs } from 'antd';
import { Container } from '@/components';
import { AdminMapRoutes } from './AdminMapRoutes';

const TABS_CONTENT = [
    { label: `Rutas`, children: <AdminMapRoutes /> },
    { label: `Usuarios`, children: <h3>Usuarios</h3> },
    { label: `Permisos`, children: <h3>Permisos</h3> },
]

export const AdminPanel: FC = () => {
    return (
        <Container>
            <Tabs
                type='card'
                items={TABS_CONTENT.map((content, i) => {
                    return {
                        key: content.label,
                        label: content.label,
                        children: content.children,
                    };
                })}
            />
        </Container>
    )
}
