import { FC, ReactNode } from 'react'
import styles from './styles.module.css'

export const Container: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
