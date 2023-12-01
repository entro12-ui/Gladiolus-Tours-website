import styles from './ui-page-home-index.module.css';

/* eslint-disable-next-line */
export interface UiPageHomeIndexProps {}

export function UiPageHomeIndex(props: UiPageHomeIndexProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageHomeIndex!</h1>
    </div>
  );
}

export default UiPageHomeIndex;
