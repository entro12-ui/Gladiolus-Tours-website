import { useContext } from 'react';
import LargeGreen from './green-theme/WhatsAppButtonGreenLarge.svg';
import MediumGreen from './green-theme/WhatsAppButtonGreenMedium.svg';
import SmallGreen from './green-theme/WhatsAppButtonGreenSmall.svg';
import LargeWhite from './white-theme/WhatsAppButtonWhiteLarge.svg';
import MediumWhite from './white-theme/WhatsAppButtonWhiteMedium.svg';
import SmallWhite from './white-theme/WhatsAppButtonWhiteSmall.svg';
import { AnalyticsContext } from '@collo/ui-utils-analytics';

export type WhatsAppChatButtonSize = 'small' | 'medium' | 'large';
export type WhatsAppChatButtonTheme = 'green' | 'white';

export enum WhatsAppChatButtonRecipient {
  KWTZ = '255742804629',
}

interface IProps {
  linkClassName?: string;
  imageClassName?: string;
  size: WhatsAppChatButtonSize;
  theme: WhatsAppChatButtonTheme;
  recipient: WhatsAppChatButtonRecipient;
}

const toButton = (
  size: WhatsAppChatButtonSize,
  theme: WhatsAppChatButtonTheme
) => {
  switch (theme) {
    case 'green': {
      switch (size) {
        case 'large':
          return LargeGreen;
        case 'medium':
          return MediumGreen;
        case 'small':
          return SmallGreen;
      }
      break;
    }
    case 'white': {
      switch (size) {
        case 'large':
          return LargeWhite;
        case 'medium':
          return MediumWhite;
        case 'small':
          return SmallWhite;
      }
    }
  }
};

const toLink = (recipient: WhatsAppChatButtonRecipient) => {
  return `https://wa.me/${recipient}`;
};

export const WhatsAppChatButton = ({
  linkClassName = '',
  imageClassName = '',
  size,
  theme,
  recipient,
}: IProps) => {
  const analytics = useContext(AnalyticsContext);
  return (
    <a
      className={linkClassName}
      aria-label="Chat on WhatsApp"
      href={toLink(recipient)}
      onClick={(e) => {
        analytics.track(`WhatsApp chat button clicked: ${recipient}`);
      }}
    >
      <img
        className={imageClassName}
        alt="Chat on WhatsApp"
        src={toButton(size, theme)}
      />
    </a>
  );
};
