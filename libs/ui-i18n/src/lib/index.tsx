import styles from './ui-i18n.module.css';

/* eslint-disable-next-line */
export interface UiI18nProps {}

export function Index(props: UiI18nProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiI18n!</h1>
    </div>
  );
}

export default Index;
