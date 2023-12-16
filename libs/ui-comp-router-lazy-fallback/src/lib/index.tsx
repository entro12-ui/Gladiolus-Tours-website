import styles from './ui-comp-router-lazy-fallback.module.css';

/* eslint-disable-next-line */
export interface UiCompRouterLazyFallbackProps {}

export function Index(props: UiCompRouterLazyFallbackProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompRouterLazyFallback!</h1>
    </div>
  );
}

export default Index;
