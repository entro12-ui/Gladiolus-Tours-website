import styles from './ui-layout-gladiolus.module.css';

/* eslint-disable-next-line */
export interface UiLandingPageProps {}

export function Index(props: UiLandingPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiLandingPage!</h1>
    </div>
  );
}

export default Index;
