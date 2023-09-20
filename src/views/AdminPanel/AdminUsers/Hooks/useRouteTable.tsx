import dayjs from 'dayjs';
import { Switch, Tag } from "antd";
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { ColumnsType } from 'antd/es/table';

export const useRouteTable = () => {
    const columns: ColumnsType = [
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
        },
        {
            width: 100,
            key: 'action',
            align: 'center',
            title: 'Acción',
            render: (_: number, row: any) => (
                <Switch
                    defaultChecked={row?._id}
                    checkedChildren={<AiOutlineCheck />}
                    unCheckedChildren={<AiOutlineClose />}
                />
            )
        }
    ]

    return { columns }
}