import styles from './ui-api.module.css';

/* eslint-disable-next-line */
export interface UiApiProps {}

export function UiApi(props: UiApiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiApi!</h1>
    </div>
  );
}

export default UiApi;
