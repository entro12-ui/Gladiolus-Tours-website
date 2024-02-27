import styles from './ui-comp-rate.module.css';

/* eslint-disable-next-line */
export interface UiCompRateProps {}

export function UiCompRate(props: UiCompRateProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompRate!</h1>
    </div>
  );
}

export default UiCompRate;
