import styles from './ui-comp-logo.module.css';

/* eslint-disable-next-line */
export interface UiCompLogoProps {}

export function UiCompLogo(props: UiCompLogoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompLogo!</h1>
    </div>
  );
}

export default UiCompLogo;
