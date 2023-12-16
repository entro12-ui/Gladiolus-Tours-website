import styles from './ui-comp-scroll-to-top.module.css';

/* eslint-disable-next-line */
export interface UiCompScrollToTopProps {}

export function UiCompScrollToTop(props: UiCompScrollToTopProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompScrollToTop!</h1>
    </div>
  );
}

export default UiCompScrollToTop;
