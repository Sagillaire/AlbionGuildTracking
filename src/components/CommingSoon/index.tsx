import { FC } from "react"
import styles from './styles.module.css'

export const CommingSoon: FC = () => {
    return (
        <div className={styles.Container}>
            <iframe
                width="80%"
                height="60%"
                src="https://www.youtube.com/embed/-3yEujRK1CM?autoplay=1"
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <span>Pagina en progreso...</span>
        </div>
    )
}
