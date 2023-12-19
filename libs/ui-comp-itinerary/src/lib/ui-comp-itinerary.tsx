import styles from './ui-comp-itinerary.module.css';

/* eslint-disable-next-line */
export interface UiCompItineraryProps {}

export function UiCompItinerary(props: UiCompItineraryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompItinerary!</h1>
    </div>
  );
}

export default UiCompItinerary;
