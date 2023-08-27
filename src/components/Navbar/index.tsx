'use client'
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "./routes";
import { userStore } from "@/core";
import styles from './styles.module.css';
import { getUserName } from "@/core/utils";
import { useRouter } from "next/navigation";
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';

export const Navbar: FC = () => {
    const { user, logout, rol } = userStore()
    const router = useRouter()

    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <Link href='/#'>
                    <Image width={100} height={40} className={styles.FigureImg} src="/logo.svg" alt="Logo" />
                </Link>
                <div className={styles.links}>
                    {routes.map((route) => (
                        <Link key={route.id} href={route.url} className={styles.link}>
                            {route.title}
                        </Link>
                    ))}
                </div>
                <div className={styles.NavOptions}>
                    <span className={rol === 'OFFICIAL' ? styles.userAccess : ''} onClick={() => rol === 'OFFICIAL' ? router?.push('admin') : {}} >
                        Hello, {getUserName(user)}
                    </span>
                    {!user && (
                        <Link href='/login' className={styles.LogoutIcon} onClick={() => router.push('/login')}>
                            <AiOutlineUser />
                        </Link>
                    )}
                    {user && (
                        <Link href='/' className={styles.LogoutIcon} onClick={logout}>
                            <AiOutlineLogout />
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    )
}
