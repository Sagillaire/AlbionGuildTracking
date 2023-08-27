import React from 'react'
import { FC } from 'react'
import { ICardRout } from './types'
import styles from './styles.module.css'
import { CountDown } from '../CountDown'

const dataFake = {
    response: {
        created_by: "Sagillaire",
        route_info: [
            {
                time: "2023-08-26T09:04:00.000Z",
                map_name: "Caerleon",
                map_zone: "Red",
                state: "1",
                _id: "64e994f3b46241051dcb4823"
            },
            {
                time: "2023-08-26T06:23:00.000Z",
                map_name: "Yew Wood",
                map_zone: "Yellow",
                state: "1",
                _id: "64e994f3b46241051dcb4824"
            },
            {
                time: "2023-08-26T16:04:00.000Z",
                map_name: "Martlock",
                map_zone: "Blue",
                state: "1",
                _id: "64e994f3b46241051dcb4825"
            },
            {
                time: "2023-08-27T04:58:00.000Z",
                map_name: "Odetis",
                map_zone: "Roads",
                state: "1",
                _id: "64e994f3b46241051dcb4826"
            }
        ],
        _id: "64e994f3b46241051dcb4822",
        createdAt: "2023-08-26T06:00:19.337Z",
        updatedAt: "2023-08-26T06:00:19.337Z"
    }
}

const response = dataFake.response

export const CardRout: FC<ICardRout> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.conTitle}>
                <h1>
                    {response?.route_info?.[0]?.map_name}
                </h1>
            </div>
            <div className={styles.routeContainer}>
                {response?.route_info?.map((mapa) => (
                    <div className={styles.routeLine} key={mapa.map_name}>
                        <div className={styles.name}>{mapa.map_name}</div>
                        <div className={styles.zone}>{mapa.map_zone}</div>
                        <div className={styles.hour}><CountDown remainingSave={{ timeHour:mapa.time, updatedAt: response.updatedAt }} /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
