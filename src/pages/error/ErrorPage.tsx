import styles from './ErrorPage.module.css';

interface ErrorPageProps {
  name: string;
  message: string;
}

export default function ErrorPage({ name, message }: ErrorPageProps) {
  return (
    <div className={styles.error}>
      <div>
        <div className={styles.title}>
          An error occurred and the page did not load
        </div>
        <div>{name}</div>
        <div>{message}</div>
      </div>
    </div>
  );
}
