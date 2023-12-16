import styles from './ui-comp-images.module.css';

/* eslint-disable-next-line */
export interface UiCompImagesProps {}

export function Index(props: UiCompImagesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompImages!</h1>
    </div>
  );
}

export default Index;
