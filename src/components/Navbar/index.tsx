'use client'
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "./routes";
import { userStore } from "@/core";
import styles from './styles.module.css';
import { getUserName } from "@/core/utils";
import { AiOutlineLogout } from 'react-icons/ai';

export const Navbar: FC = () => {
    const { user } = userStore()
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
                    <span>Hello, {getUserName(user)}</span>
                    <span className={styles.LogoutIcon}>
                        <AiOutlineLogout />
                    </span>
                </div>
            </nav>
        </header>
    )
}
