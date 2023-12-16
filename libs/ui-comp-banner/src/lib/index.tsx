import styles from './ui-comp-banner.module.css';

/* eslint-disable-next-line */
export interface UiCompBannerProps {}

export function Index(props: UiCompBannerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompBanner!</h1>
    </div>
  );
}

export default Index;
