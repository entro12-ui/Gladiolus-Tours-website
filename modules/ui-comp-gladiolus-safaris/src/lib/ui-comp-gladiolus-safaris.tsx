import styles from './ui-comp-gladiolus-safaris.module.css';

/* eslint-disable-next-line */
export interface UiCompGladiolusSafarisProps {}

export function UiCompGladiolusSafaris(props: UiCompGladiolusSafarisProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompGladiolusSafaris!</h1>
    </div>
  );
}

export default UiCompGladiolusSafaris;
