import { ReactNode } from 'react';
import { Navbar } from './navbar';

interface Props {
  children: ReactNode;
}

export const UiGladiolusToursLayoutWebsite = ({ children }: Props) => {
  return (
    <div className={'min-h-screen max-h-screen overflow-hidden'}>
      <div className="lg:pl-20">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
