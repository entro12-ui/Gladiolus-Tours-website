import styles from './ui-page-accomodations.module.css';

/* eslint-disable-next-line */
export interface UiPageAccomodationsProps {}

export function UiPageAccomodations(props: UiPageAccomodationsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageAccomodations!</h1>
    </div>
  );
}

export default UiPageAccomodations;
