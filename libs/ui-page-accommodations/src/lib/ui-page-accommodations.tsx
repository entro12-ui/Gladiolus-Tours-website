import styles from './ui-page-accommodations.module.css';

/* eslint-disable-next-line */
export interface UiPageAccommodationsProps {}

export function UiPageAccommodations(props: UiPageAccommodationsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageAccommodations!</h1>
    </div>
  );
}

export default UiPageAccommodations;
