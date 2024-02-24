import styles from './ui-comp-activities.module.css';

/* eslint-disable-next-line */
export interface UiCompActivitiesProps {}

export function UiCompActivities(props: UiCompActivitiesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompActivities!</h1>
    </div>
  );
}

export default UiCompActivities;
