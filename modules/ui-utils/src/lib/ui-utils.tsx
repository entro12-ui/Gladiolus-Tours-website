import styles from './ui-utils.module.css';

/* eslint-disable-next-line */
export interface UiUtilsProps {}

export function UiUtils(props: UiUtilsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiUtils!</h1>
    </div>
  );
}

export default UiUtils;
