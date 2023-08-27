'use client'
import { FC } from 'react';
import { Button, Table } from 'antd';
import { FaPlus } from 'react-icons/fa';
import { ModalCreate } from './ModalCreate';
import { useAdminRoutes, useRouteTable } from './Hooks';

export const AdminMapRoutes: FC = () => {
    const { modalRoute, handleModalRoute, routesData } = useAdminRoutes()
    const { columns } = useRouteTable()

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ padding: '10px', backgroundColor: 'white', boxShadow: '0px 0px 10px #d2d2d2', borderRadius: '5px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Button
                    style={{ display: 'flex', alignSelf: 'flex-end', alignItems: 'center' }}
                    onClick={handleModalRoute}
                    icon={<FaPlus />}
                >
                    Crear Ruta
                </Button>
                <Table columns={columns} dataSource={routesData} />
            </div>

            <ModalCreate open={modalRoute} onCancel={handleModalRoute} />
        </div>
    )
}
