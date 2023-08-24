'use client'
import { useGetSession } from '@/core'
import styles from './styles.module.css'
import { FC, useEffect, ReactNode } from 'react'

export const SessionProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { getSessionMutate } = useGetSession()

    useEffect(() => {
        let token = localStorage.getItem('guildUserToken') || null
        getSessionMutate(token as string)
    }, [getSessionMutate])

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
