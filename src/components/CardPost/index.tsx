'use client'
import { FC } from 'react';
import { Card } from 'antd';
import Image from 'next/image';
import { ICardPost } from './types';
import { CountDown } from '../CountDown';
import styles from './styles.module.css';

export const CardPost: FC<ICardPost> = ({ remaining, title, handleModalRoute }) => {
    return (
        <Card
            style={{ width: 300 }}
            className={styles.container}
            onClick={() => handleModalRoute()}
            title={title} extra={<CountDown remainingSave={remaining} />}
        >
            <Image width={252} height={200} alt='Imagen de mapa' src='/albionCardSet.png' />
        </Card>
    )
}
