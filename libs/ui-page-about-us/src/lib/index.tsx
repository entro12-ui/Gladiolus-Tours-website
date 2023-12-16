import styles from './ui-page-about-us.module.css';

/* eslint-disable-next-line */
export interface UiPageAboutUsProps {}

export function Index(props: UiPageAboutUsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageAboutUs!</h1>
    </div>
  );
}

export default Index;
