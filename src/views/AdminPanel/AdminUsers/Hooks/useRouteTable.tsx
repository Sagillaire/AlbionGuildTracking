import dayjs from 'dayjs';
import { Tag } from "antd";

export const useRouteTable = () => {
    const columns = [
        {
            key: 'username',
            title: 'Usuario',
            render: (_: number, row: any) => (
                <span>{dayjs(row?.username).format('YYYY-MM-DD HH:mm')}</span>
            )
        },
        {
            key: 'rol',
            title: 'Rol',
            render: (_: number, row: any) => (
                <span>{row?.rol}</span>
            )
        },
        {
            key: 'verificado',
            title: 'Verificado',
            render: (_: number, row: any) => (
                <Tag color={row?.verified ? 'green' : 'red'}>
                    {row?.verified ? 'VERIFICADO' : 'NO VERIFICADO'}
                </Tag>
            )
        },
        {
            key: 'state',
            title: 'Estado',
            dataIndex: 'state',
            render: (_: number, row: any) => (
                <Tag color={row?.status ? 'green' : 'red'}>
                    {row?.status ? 'ACTIVO' : 'INACTIVO'}
                </Tag>
            )
        }
    ]

    return { columns }
}