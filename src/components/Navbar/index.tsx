import { FC } from "react"
import styles from './styles.module.css'
import { AiOutlineLogout } from 'react-icons/ai'

export const Navbar: FC = () => {
    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <img className={styles.FigureImg} src="/logo.png" alt="Logo" />
                <div className={styles.NavOptions}>
                    <span>LaxusSlayer</span>
                    <span className={styles.LogoutIcon}>
                        <AiOutlineLogout />
                    </span>
                </div>
            </nav>
        </header>
    )
}
