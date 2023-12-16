import styles from './ui-router-gladiolus.module.css';

/* eslint-disable-next-line */
export interface UiRouterGladiolusProps {}

export function Index(props: UiRouterGladiolusProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiRouterGladiolus!</h1>
    </div>
  );
}

export default Index;
