import { CardPost } from '@/components/CardPost';
import styles from './page.module.css';
import { CardRout } from '@/components/CardRout';

export default function Home() {
  return (
    <main className={styles.main}>
      <CardPost title='Albion' />
      <CardRout />
    </main>
  )
}
