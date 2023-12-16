import styles from './ui-comp-notifications.module.css';

/* eslint-disable-next-line */
export interface UiCompNotificationsProps {}

export function Index(props: UiCompNotificationsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompNotifications!</h1>
    </div>
  );
}

export default Index;
