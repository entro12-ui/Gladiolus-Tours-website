import styles from './ui-page-destinations.module.css';

/* eslint-disable-next-line */
export interface UiPageDestinationsProps {}

export function UiPageDestinations(props: UiPageDestinationsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageDestinations!</h1>
    </div>
  );
}

export default UiPageDestinations;
