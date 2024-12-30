import mixpanel from "mixpanel-browser";
import { createContext, ReactNode } from "react";

// Not replaceable by endsWith("kwawingu.com") because we don't want to track QA activity
const ENABLED_HOSTNAMES = new Set(["kwawingu.com", "tours.kwawingu.com"]);

export interface IAnalyticsProvider {
  track: (message: string) => void;
  associateEmail: (email: string) => void;
  reset: () => void;
  alias: (email: string) => void;
}

const NOOP_ANALYTICS_PROVIDER: IAnalyticsProvider = {
  track: (message) => {
    console.log("Analytics:track", message);
  },
  associateEmail: (email) => {
    console.log("Analytics:associateEmail", email);
  },
  alias: (email) => {
    console.log("Analytics:alias", email);
  },
  reset: () => {
    console.log("Analytics:reset");
  },
};

const newAnalyticsProvider = (): IAnalyticsProvider => {
  if (ENABLED_HOSTNAMES.has(window.location.hostname)) {
    mixpanel.init("424a39065d0134ea15e546f82c9323b8"); // eslint-disable-line
    return {
      track: (message) => {
        mixpanel.track(message);
      },
      associateEmail: (email) => {
        mixpanel.identify(email); // user's events now associated with their email address in Mixpanel
        mixpanel.people.set({ $email: email });
      },
      alias: (email) => {
        mixpanel.alias(email); // user's events now associated with their email address in Mixpanel
        mixpanel.people.set({ $email: email });
      },
      reset: () => {
        mixpanel.reset();
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
