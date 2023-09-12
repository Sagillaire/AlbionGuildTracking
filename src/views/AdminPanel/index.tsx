import { FC } from 'react';
import { Tabs } from 'antd';
import { Container } from '@/components';
import { AdminMapRoutes } from './AdminMapRoutes';
import { AdminUsers } from './AdminUsers';

const TABS_CONTENT = [
    { label: `Rutas`, children: <AdminMapRoutes /> },
    { label: `Usuarios`, children: <AdminUsers /> },
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
