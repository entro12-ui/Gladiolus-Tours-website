import styles from './ui-comp-page-helmet.module.css';

/* eslint-disable-next-line */
export interface UiCompPageHelmetProps {}

export function Index(props: UiCompPageHelmetProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompPageHelmet!</h1>
    </div>
  );
}

export default Index;
