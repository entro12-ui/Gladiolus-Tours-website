import { ReactElement, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnalyticsContext } from "./analytics-config";

interface IProps {
  children?: ReactElement;
}

export const AnalyticsLocationHistory = ({ children }: IProps) => {
  const location = useLocation(); // MUST be called within the context of a react-router router
  const analytics = useContext(AnalyticsContext);
  useEffect(() => {
    // * REMEMBER: the ancestor provider disables mixpanel in e.g. local dev environments,
    //   do NOT modify this component to alter that behavior, instead go to the context provider
    // * The hostname is important for distinguishing routes across different product subdomains
    analytics.track(window.location.hostname + location.pathname); // eslint-disable-line
  }, [location, analytics]);
  return children || null;
};
