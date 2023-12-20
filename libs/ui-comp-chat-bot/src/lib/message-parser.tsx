import React from 'react';

export const MessageParser = ({ children }: never) => {
  const parse = (message: never) => {
    console.log(message);
  };
  return (
    <div>
      {' '}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { parse: parse, actions: {} });
      })}{' '}
    </div>
  );
};
