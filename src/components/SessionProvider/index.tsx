'use client'
import styles from './styles.module.css'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useEffect, ReactNode } from 'react'
import { useGetSession, userStore } from '@/core'

export const SessionProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { getSessionMutate } = useGetSession()
    const { loading } = userStore()
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        let token = localStorage.getItem('guildUserToken') || null
        getSessionMutate(token as string)
    }, [getSessionMutate])

    useEffect(() => {
        const token = localStorage.getItem('guildUserToken')
        if ((token && pathname === '/login' || (token && pathname === '/register'))) {
            router.push('/')
        }
    }, [loading, pathname, router])

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
