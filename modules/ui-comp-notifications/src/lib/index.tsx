import ReactNotification, {
  ReactNotificationOptions,
  store,
} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const DEFAULT: ReactNotificationOptions = {
  type: 'danger',
  insert: 'top',
  container: 'top-center',
  dismiss: {
    duration: 5000,
    onScreen: true,
  },
};

const GtNotify = {
  danger: (title: string, message: string, duration = 5000) => {
    const n: ReactNotificationOptions = {
      ...DEFAULT,
      type: 'danger',
      title,
      message,
      dismiss: {
        duration,
      },
    };
    store.addNotification(n);
  },
  success: (title: string, message: string, duration = 5000) => {
    const n: ReactNotificationOptions = {
      ...DEFAULT,
      type: 'success',
      title,
      message,
      dismiss: {
        duration,
      },
    };
    store.addNotification(n);
  },
  info: (title: string, message: string, duration = 5000) => {
    const n: ReactNotificationOptions = {
      ...DEFAULT,
      type: 'info',
      title,
      message,
      dismiss: {
        duration,
      },
    };
    store.addNotification(n);
  },
  warning: (title: string, message: string, duration = 5000) => {
    const n: ReactNotificationOptions = {
      ...DEFAULT,
      type: 'warning',
      title,
      message,
      dismiss: {
        duration,
      },
    };
    store.addNotification(n);
  },
};

const GtNotification = () => {
  return <ReactNotification />;
};

export { GtNotify, GtNotification };
