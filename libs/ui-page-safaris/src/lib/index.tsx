import styles from './ui-page-safaris.module.css';

/* eslint-disable-next-line */
export interface UiPageSafarisProps {}

export function Index(props: UiPageSafarisProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageSafaris!</h1>
    </div>
  );
}

export default Index;
