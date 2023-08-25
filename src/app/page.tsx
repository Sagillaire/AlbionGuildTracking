import { CardPost } from '@/components/CardPost';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <CardPost title='Albion'/>
    </main>
  )
}
