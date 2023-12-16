import styles from './ui-page-contact.module.css';

/* eslint-disable-next-line */
export interface UiPageContactProps {}

export function Index(props: UiPageContactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageContact!</h1>
    </div>
  );
}

export default Index;
