import styles from './ui-page-itinerary.module.css';

/* eslint-disable-next-line */
export interface UiPageItineraryProps {}

export function UiPageItinerary(props: UiPageItineraryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageItinerary!</h1>
    </div>
  );
}

export default UiPageItinerary;
