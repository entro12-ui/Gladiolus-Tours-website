import styles from './ui-utils-form.module.css';

/* eslint-disable-next-line */
export interface UiUtilsFormProps {}

export function Index(props: UiUtilsFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiUtilsForm!</h1>
    </div>
  );
}

export default Index;
