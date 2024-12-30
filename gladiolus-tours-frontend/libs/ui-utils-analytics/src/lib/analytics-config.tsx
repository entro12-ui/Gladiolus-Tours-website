import posthog from 'posthog-js';
import { createContext, ReactNode } from 'react';

// Not replaceable by endsWith("gladiolustours.com") because we don't want to track QA activity
const ENABLED_HOSTNAMES = new Set([
  'gladiolustours.com',
  'admin.gladiolustours.com',
]);

export interface IAnalyticsProvider {
  track: (message: string) => void;
  associateEmail: (email: string) => void;
  reset: () => void;
  alias: (email: string) => void;
}

const NOOP_ANALYTICS_PROVIDER: IAnalyticsProvider = {
  track: (message) => {
    console.log('Analytics:track', message);
  },
  associateEmail: (email) => {
    console.log('Analytics:associateEmail', email);
  },
  alias: (email) => {
    console.log('Analytics:alias', email);
  },
  reset: () => {
    console.log('Analytics:reset');
  },
};

const newAnalyticsProvider = (): IAnalyticsProvider => {
  if (ENABLED_HOSTNAMES.has(window.location.hostname)) {
    posthog.init('YOUR_POSTHOG_API_KEY', {
      api_host: 'https://app.posthog.com',
    });
    return {
      track: (message) => {
        posthog.capture(message);
      },
      associateEmail: (email) => {
        posthog.identify(email); // user's events now associated with their email address
        posthog.people.set({ $email: email });
      },
      alias: (email) => {
        posthog.alias(email); // user's events now associated with their email address in Mixpanel
        posthog.people.set({ $email: email });
      },
      reset: () => {
        posthog.reset();
      },
    };
  }
  return NOOP_ANALYTICS_PROVIDER;
};

// NOT in contexts.ts due to it inducing a circular lib dependency when placed there
export const AnalyticsContext = createContext<IAnalyticsProvider>(
  newAnalyticsProvider()
);

interface IProps {
  children?: ReactNode;
}

export const AnalyticsProvider = ({ children }: IProps) => {
  return (
    <AnalyticsContext.Provider value={newAnalyticsProvider()}>
      {children}
    </AnalyticsContext.Provider>
  );
};
