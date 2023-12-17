import styles from './ui-persistance.module.css';

/* eslint-disable-next-line */
export interface UiPersistanceProps {}

export function UiPersistance(props: UiPersistanceProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPersistance!</h1>
    </div>
  );
}

export default UiPersistance;
