import styles from './ui-page-destination-details.module.css';

/* eslint-disable-next-line */
export interface UiPageDestinationDetailsProps {}

export function UiPageDestinationDetails(props: UiPageDestinationDetailsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageDestinationDetails!</h1>
    </div>
  );
}

export default UiPageDestinationDetails;
