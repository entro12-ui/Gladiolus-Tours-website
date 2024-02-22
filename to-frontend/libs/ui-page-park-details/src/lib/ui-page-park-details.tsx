import styles from './ui-page-park-details.module.css';

/* eslint-disable-next-line */
export interface UiPageParkDetailsProps {}

export function UiPageParkDetails(props: UiPageParkDetailsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageParkDetails!</h1>
    </div>
  );
}

export default UiPageParkDetails;
