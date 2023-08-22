import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from './styles.module.css'
import { AiOutlineLogout } from 'react-icons/ai'

const links = [
    {
        id:1,
        title:"BUILDS",
        url: "/builds",
    },
    {
        id:2,
        title:"MAPS",
        url: "/Maps",
    },
    {
        id:3,
        title:"ROUTES",
        url: "/routes",
    },
]

export const Navbar: FC = () => {
    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <Link href='/#'>
                    <Image width={100} height={40} className={styles.FigureImg} src="/logo.svg" alt="Logo" />
                </Link>
                <div className={styles.links}>
                    {links.map((link) => (
                        <Link key={link.id} href={link.url} className={styles.link}>
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className={styles.NavOptions}>
                    <span>LaxuSlayer</span>
                    <span className={styles.LogoutIcon}>
                        <AiOutlineLogout />
                    </span>
                </div>
            </nav>
        </header>
    )
}
