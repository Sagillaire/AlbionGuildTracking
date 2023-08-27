'use client'
import { FC } from 'react';
import { MapRouteById } from '@/core';
import { IModalRoute } from './types';
import { Modal, message } from 'antd';
import { useQuery } from 'react-query';
import styles from './styles.module.css';
import { CountDown } from '../CountDown';
import { useSearchParams } from 'next/navigation';

export const ModalRoute: FC<IModalRoute> = ({ open, onCancel }) => {
    const searchParams = useSearchParams()
    const id = searchParams?.get('id') as string
    const { data } = useQuery(['getMapRouteById', id], () => MapRouteById.getById(id), {
        onError: () => message.error('No se pudo traer la ruta'),
        enabled: Boolean(id)
    })

    const titles: string[] = ['MAP NAME', 'MAP ZONE', 'TIME LEFT']

    return (
        <Modal
            width='50%'
            open={open}
            footer={false}
            onCancel={onCancel}
            className={styles.modal}
            title={data?.route_info?.[data?.route_info?.length - 1]?.map_name}
        >
            <div className={styles.container}>
                <div className={styles.routeContainer}>
                    <div className={styles.routeLine}>
                        {titles.map((title) => (
                            <span key={title} className={styles.titles}>
                                {title}
                            </span>
                        ))}
                    </div>
                    {data?.route_info?.map((mapa) => (
                        <div className={styles.routeLine} key={mapa?.map_name}>
                            <div className={styles.name}>{mapa?.map_name}</div>
                            <div className={styles.zone}>{mapa?.map_zone}</div>
                            <div className={styles.hour}>
                                <CountDown remainingSave={{
                                    updatedAt: data?.updatedAt || '2023-08-26T06:00:19.337Z',
                                    timeHour: String(mapa?.time) || '2023-08-26T06:00:19.337Z'
                                }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    )
}
