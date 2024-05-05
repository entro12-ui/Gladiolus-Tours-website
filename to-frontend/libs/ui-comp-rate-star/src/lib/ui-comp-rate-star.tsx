import styles from './ui-comp-rate-star.module.css';

/* eslint-disable-next-line */
export interface UiCompRateStarProps {}

export function UiCompRateStar(props: UiCompRateStarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompRateStar!</h1>
    </div>
  );
}

export default UiCompRateStar;
