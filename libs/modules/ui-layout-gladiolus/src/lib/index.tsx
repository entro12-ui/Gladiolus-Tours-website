import { ReactNode } from 'react';
import { GladiolusHeader } from './navbar';
import { GladiolusFooter } from './footer';
import { GladiolusBanner } from '@gladiolus/ui-comp-banner';

interface Props {
  children: ReactNode;
}

export const UiGladiolusToursLayoutWebsite = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <GladiolusBanner />
      <GladiolusHeader />
      <div className={'min-h-screen'}>{children}</div>
      <GladiolusFooter />
    </div>
  );
};
