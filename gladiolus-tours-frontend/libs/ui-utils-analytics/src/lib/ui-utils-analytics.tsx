import styles from './ui-utils-analytics.module.css';

/* eslint-disable-next-line */
export interface UiUtilsAnalyticsProps {}

export function UiUtilsAnalytics(props: UiUtilsAnalyticsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiUtilsAnalytics!</h1>
    </div>
  );
}

export default UiUtilsAnalytics;
