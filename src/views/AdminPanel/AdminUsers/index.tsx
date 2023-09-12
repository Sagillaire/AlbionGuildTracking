'use client'
import { FC } from 'react';
import { Table } from 'antd';
import styles from './styles.module.css';
import { useAdminRoutes, useRouteTable } from './Hooks';

export const AdminUsers: FC = () => {
    const { routesData } = useAdminRoutes()
    const { columns } = useRouteTable()

    return (
        <div className={styles.containerAdminRoutes}>
            <Table columns={columns} dataSource={routesData} />
        </div>
    )
}
