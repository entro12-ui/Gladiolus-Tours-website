import styles from './ui-routes-gladiolus.module.css';

/* eslint-disable-next-line */
export interface UiRoutesGladiolusProps {}

export function UiRoutesGladiolus(props: UiRoutesGladiolusProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiRoutesGladiolus!</h1>
    </div>
  );
}

export default UiRoutesGladiolus;
