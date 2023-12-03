import styles from './ui-comp-header.module.css';

/* eslint-disable-next-line */
export interface UiCompHeaderProps {}

export function UiCompHeader(props: UiCompHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompHeader!</h1>
    </div>
  );
}

export default UiCompHeader;
