import GtLogo from './images/192 X 192.webp';
import { CSSProperties } from 'react';

export const Logo = ({
  className,
  style,
}: {
  style?: CSSProperties;
  className?: string;
}) => {
  return (
    <img
      alt={'logo'}
      src={GtLogo}
      style={style}
      className={className || 'inline-block align-text-middle mb-2'}
    />
  );
};
