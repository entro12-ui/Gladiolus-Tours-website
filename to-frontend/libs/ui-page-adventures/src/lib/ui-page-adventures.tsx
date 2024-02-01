import styles from './ui-page-adventures.module.css';

/* eslint-disable-next-line */
export interface UiPageAdventuresProps {}

export function UiPageAdventures(props: UiPageAdventuresProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageAdventures!</h1>
    </div>
  );
}

export default UiPageAdventures;
