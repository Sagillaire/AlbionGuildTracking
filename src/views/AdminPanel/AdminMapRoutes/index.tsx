'use client'
import { FC } from 'react';
import { Button, Table } from 'antd';
import { FaPlus } from 'react-icons/fa';
import styles from './styles.module.css';
import { ModalCreate } from './ModalCreate';
import { useAdminRoutes, useRouteTable } from './Hooks';

export const AdminMapRoutes: FC = () => {
    const { modalRoute, handleModalRoute, routesData } = useAdminRoutes()
    const { columns } = useRouteTable()

    return (
        <div className={styles.container}>
            <div className={styles.containerAdminRoutes}>
                <Button
                    className={styles.antdRouteButton}
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
