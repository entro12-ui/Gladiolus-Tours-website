import styles from './ui-ai.module.css';

/* eslint-disable-next-line */
export interface UiAiProps {}

export function UiAi(props: UiAiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiAi!</h1>
    </div>
  );
}

export default UiAi;
