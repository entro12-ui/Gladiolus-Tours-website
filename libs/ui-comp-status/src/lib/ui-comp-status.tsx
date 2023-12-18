import styles from './ui-comp-status.module.css';

/* eslint-disable-next-line */
export interface UiCompStatusProps {}

export function UiCompStatus(props: UiCompStatusProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompStatus!</h1>
    </div>
  );
}

export default UiCompStatus;
