import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const UiGladiolusToursLayoutWebsite = ({ children }: Props) => {
  return (
    <div className={'min-h-screen max-h-screen overflow-hidden'}>
      <h1>Home Page</h1>
      <div className="lg:pl-20">{children}</div>
    </div>
  );
};
