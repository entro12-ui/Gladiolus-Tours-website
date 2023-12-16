import styles from './ui-page-services.module.css';

/* eslint-disable-next-line */
export interface UiPageServicesProps {}

export function UiPageServices(props: UiPageServicesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPageServices!</h1>
    </div>
  );
}

export default UiPageServices;
