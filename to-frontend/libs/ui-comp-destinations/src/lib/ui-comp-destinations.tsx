import styles from './ui-comp-destinations.module.css';

/* eslint-disable-next-line */
export interface UiCompDestinationsProps {}

export function UiCompDestinations(props: UiCompDestinationsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompDestinations!</h1>
    </div>
  );
}

export default UiCompDestinations;
