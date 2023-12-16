import styles from './ui-page-landing-page.module.css';

/* eslint-disable-next-line */
export interface UiPageLandingPageProps {}

export function UiPageLandingPage(props: UiPageLandingPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageLandingPage!</h1>
    </div>
  );
}

export default UiPageLandingPage;
