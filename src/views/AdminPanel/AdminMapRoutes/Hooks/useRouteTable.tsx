import dayjs from 'dayjs';
import { Tag } from "antd";

export const useRouteTable = () => {
    const columns = [
        {
            key: 'created_by',
            title: 'Creado por',
            dataIndex: 'created_by',
        },
        {
            key: 'map',
            title: 'Mapa',
            render: (_: number, row: any) => (
                <span>{row?.route_info?.[row?.route_info.length - 1]?.map_name}</span>
            )
        },
        {
            key: 'createdAt',
            title: 'Fecha creación',
            render: (_: number, row: any) => (
                <span>{dayjs(row?.createdAt).format('YYYY-MM-DD HH:mm')}</span>
            )
        },
        {
            key: 'updatedAt',
            title: 'Fecha Actualización',
            render: (_: number, row: any) => (
                <span>{dayjs(row?.updatedAt).format('YYYY-MM-DD HH:mm')}</span>
            )
        },
        {
            key: 'state',
            title: 'Estado',
            dataIndex: 'state',
            render: (_: number, row: any) => (
                <Tag color={row?.state ? 'green' : 'red'}>
                    {row?.state ? 'ACTIVO' : 'INACTIVO'}
                </Tag>
            )
        }
    ]

    return { columns }
}