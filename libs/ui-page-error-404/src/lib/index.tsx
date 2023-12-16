import styles from './ui-page-error-404.module.css';

/* eslint-disable-next-line */
export interface UiPageError404Props {}

export function Index(props: UiPageError404Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageError404!</h1>
    </div>
  );
}

export default Index;
