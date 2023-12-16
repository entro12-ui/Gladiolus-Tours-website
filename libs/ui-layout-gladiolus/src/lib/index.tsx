import styles from './ui-layout-gladiolus.module.css';

/* eslint-disable-next-line */
export interface UiLayoutGladiolusProps {}

export function Index(props: UiLayoutGladiolusProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiLayoutGladiolus!</h1>
    </div>
  );
}

export default Index;
