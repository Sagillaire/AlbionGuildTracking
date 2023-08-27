'use client'
import dayjs from 'dayjs';
import { FC } from 'react';
import styles from './page.module.css';
import { useMapRoutes } from './Hooks';
import { CardPost, ModalRoute } from '@/components';

export const MapRoutes: FC = () => {
    const { data, openModalRoute, handleModalRoute } = useMapRoutes()
    return (
        <main className={styles.main}>
            {data?.response?.map((map) => {
                const minTime = map?.route_info.reduce((min, item) => {
                    const currentTime = dayjs(item.time);
                    return currentTime.isBefore(min) ? currentTime : min
                }, dayjs(map?.route_info[0].time));
                const remaining = { timeHour: String(minTime), updatedAt: String(map?.updatedAt) }
                return (
                    <CardPost
                        key={map?._id}
                        remaining={remaining}
                        handleModalRoute={() => handleModalRoute(map?._id)}
                        title={map?.route_info?.[map?.route_info?.length - 1]?.map_name}
                    />
                )
            })}
            <ModalRoute open={openModalRoute} onCancel={() => handleModalRoute()} />
        </main>
    )
}
