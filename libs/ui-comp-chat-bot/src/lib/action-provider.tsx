import React from 'react';

export const ActionProvider = ({ children }: never) => {
  return (
    <div>
      {' '}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { actions: {} });
      })}{' '}
    </div>
  );
};
