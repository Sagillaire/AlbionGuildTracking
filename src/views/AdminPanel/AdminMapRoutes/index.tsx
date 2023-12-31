'use client'
import { FC } from 'react';
import { Button, Table } from 'antd';
import { FaPlus } from 'react-icons/fa';
import styles from './styles.module.css';
import { ModalCreate } from './ModalCreate';
import { useForm, FormProvider } from 'react-hook-form';
import { useAdminRoutes, useRouteTable } from './Hooks';

export const AdminMapRoutes: FC = () => {
    const { modalRoute, handleModalRoute, routesData } = useAdminRoutes()
    const { columns } = useRouteTable()
    const methods = useForm()

    return (
        <FormProvider {...methods}>
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
        </FormProvider>
    )
}
