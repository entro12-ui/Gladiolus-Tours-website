import { ReactNode } from 'react';
import { LandingPage } from './landing-page';

interface Props {
  children: ReactNode;
}

export const UiGladiolusToursLayoutWebsite = ({ children }: Props) => {
  return (
    <div>
      <div>
        <LandingPage />
        {children}
      </div>
    </div>
  );
};
