import { FC } from 'react'
import { Card } from 'antd';
import Image from 'next/image';
import { ICardPost } from './types'
import styles from './styles.module.css'

export const CardPost: FC<ICardPost> = ({ desc, title, handleModalRoute }) => {
    return (
        <Card
            className={styles.container}
            title={title} extra={ <span>😂</span> } 
            style={{ width: 300 }}
            onClick={handleModalRoute}
            >
            <Image width={252} height={200} alt='Imagen de mapa' src='/albionCardSet.png' />
        </Card>
    )
}
