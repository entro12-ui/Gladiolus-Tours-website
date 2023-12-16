import styles from './ui-page-itineraries.module.css';

/* eslint-disable-next-line */
export interface UiPageItinerariesProps {}

export function Index(props: UiPageItinerariesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageItineraries!</h1>
    </div>
  );
}

export default Index;
