import Link from 'next/link';
import styles from './NotFoundCard.module.css';

export function NotFoundCard() {
  return (
    <div className={styles.card}>
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div className={`${styles.orb} ${styles.orb4}`} />
      <div className={styles.errorContainer}>
        <div className={styles.errorCode}>404</div>
        <div className={styles.errorMsg}>Nothing to see here.</div>
        <Link href="/" className={styles.homeBtn}>
          Go Home
        </Link>
      </div>
      <div className={styles.duckWrapper}>
        <div className={styles.duck}>
          <div className={styles.duckInner}>
            <div className={styles.duckMouth} />
            <div className={styles.duckHead}>
              <div className={styles.duckEye} />
              <div className={styles.duckWhite} />
            </div>
            <div className={styles.duckBody} />
            <div className={styles.duckWing} />
          </div>
          <div className={`${styles.duckFoot} ${styles.duckFoot1}`} />
          <div className={`${styles.duckFoot} ${styles.duckFoot2}`} />
          <div className={styles.surface} />
        </div>
      </div>
    </div>
  );
}
