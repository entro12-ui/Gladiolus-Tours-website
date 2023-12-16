import styles from './ui-comp-safaris.module.css';

/* eslint-disable-next-line */
export interface UiCompSafarisProps {}

export function Index(props: UiCompSafarisProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompSafaris!</h1>
    </div>
  );
}

export default Index;
