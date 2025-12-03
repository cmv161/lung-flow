import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.page}>
      <div>
        <h1 className={styles.title}>Lung Flow</h1>
        <p className={styles.description}>
          Explore a 3D model of human lungs directly in your browser.
        </p>
        <Link className={styles.cta} href="/viewer">
          Open Viewer
        </Link>
      </div>
    </main>
  );
}
